<!-- MainVisualBackground.vue -->
<script setup lang="ts">
import { computed, shallowRef, onMounted, nextTick, useWindowSize, useLoop, useLoader } from '#imports'
import { Object3D, DynamicDrawUsage, Matrix4, InstancedMesh, TextureLoader } from 'three'
import SkillMesh from './MainVisualSkillMesh.vue'

const props = defineProps<{ pause: boolean }>()

// 画面サイズに応じて薄いグリッドを敷く（今までのロジック踏襲）
const { width, height } = useWindowSize()
const row = computed(() => Math.ceil(width.value / 50))
const col = computed(() => Math.ceil(height.value / 50))
const count = computed(() => Math.max(1, row.value * col.value))

// refs
const groupRef = shallowRef<any>(null)
const instRef = shallowRef<any>(null) // TresInstancedMesh の Three 実体

// 配置（分割初期化）
const CHUNK = 4000 // 1チャンクで埋めるインスタンス数（環境に合わせて調整）
let filled = 0

onMounted(async () => {
  await nextTick()
  const inst = instRef.value as unknown as InstancedMesh | null
  if (!inst) return

  // 更新頻度が高いので DynamicDrawUsage（必要なければ Static でも可）
  inst.instanceMatrix.setUsage(DynamicDrawUsage)

  const dummy = new Object3D()
  const mat = new Matrix4()

  const Nrow = row.value
  const Ncol = col.value

  // グリッドの中心合わせ
  const ox = Math.ceil(Nrow / 2)
  const oy = Math.ceil(Ncol / 2)

  const total = count.value

  const fillChunk = () => {
    if (!inst) return
    const end = Math.min(filled + CHUNK, total)
    for (let i = filled; i < end; i++) {
      // 2Dグリッド → 1D index
      const j = Math.floor(i / Ncol) + 1 // 1-origin 互換
      const k = (i % Ncol) + 1

      dummy.position.set(j * 1.3 - ox, k * 1.3 - oy, 2)
      dummy.rotation.set(0, 0, 0) // 初期は回さない（Group で回す）
      dummy.updateMatrix()
      mat.copy(dummy.matrix)

      inst.setMatrixAt(i, mat)
    }
    inst.instanceMatrix.needsUpdate = true
    filled = end
    if (filled < total) {
      // JSスレッドを占有しない
      setTimeout(fillChunk, 0)
    }
  }

  fillChunk()
})

// 回転など軽い演出は Group にかける
const { onBeforeRender } = useLoop()
onBeforeRender(() => {
  const g = groupRef.value
  if (!g) return
  if (props.pause) return
  g.rotation.z += 0.0015
})

const { state: tex } = useLoader(TextureLoader, '/texture/vue.png')
</script>

<template>
  <TresGroup ref="groupRef">
    <!-- InstancedMesh: geometry/material を共有（描画1回） -->
    <TresInstancedMesh ref="instRef" :args="[null!, null!, count]">
      <SkillMesh :pause="true" />
    </TresInstancedMesh>

    <!-- ★オプション: 初期安定後に “ごく一部だけ” 既存 SkillMesh を重ねる
         例）総数の 2〜5% 程度に抑えると目立ちつつ負荷がほぼ増えない -->

    <!-- <template v-for="j in row">
      <SkillMesh
        v-for="i in col"
        v-if="(i + j) % 50 === 0"
        :key="`logo-${i}-${j}`"
        :position="[j * 1.3 - Math.ceil(row / 2), i * 1.3 - Math.ceil(col / 2), 2.01]"
        :pause="props.pause"
      />
    </template> -->

  </TresGroup>
</template>
