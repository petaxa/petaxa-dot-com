<script setup lang="ts">
import { SRGBColorSpace, TextureLoader } from 'three'
import { shallowRef, watchEffect, type TresObject, useLoop, useLoader } from '#imports';

const props = defineProps<{
  position: [number, number, number]
  pause: boolean
}>()

const { onBeforeRender } = useLoop()

const boxRef = shallowRef<TresObject | null>(null)
const textureImages = ['/texture/vue.png', '/texture/typescript.png', '/texture/tres.png', '/texture/electron.png', '/texture/nuxt.png', '/texture/pinia.png', '/texture/vite.png']
const texturePath = shallowRef<string>(textureImages[Math.floor(Math.random() * textureImages.length)] ?? '/texture/vue.png')

const INTERVAL = 4.0
const DURATION = 2
let nextStartTime = 1

let isAnimated = Math.random() < 0.1
let animating = false
let animStart = 0
let from = 0
let to = 0

const textureOpacity = shallowRef(1)

let switched = false
let lastT = 0

onBeforeRender(({ elapsed }) => {
  const mesh = boxRef.value

  if (!mesh) { return }
  if (props.pause) {
    isAnimated = false
    animating = false
    textureOpacity.value = 1
    mesh.rotation.z = 0
    return
  }

  if (!animating && elapsed >= nextStartTime) {
    if (isAnimated) {
      animating = true
      animStart = elapsed
      from = mesh.rotation.z
      to = from + Math.PI * 2
    }

    nextStartTime = elapsed + INTERVAL + DURATION
    isAnimated = Math.random() < 0.1
  }

  const T1 = 0.5
  const T2 = 0.8

  if (animating) {
    const t = Math.min(1, (elapsed - animStart) / DURATION)

    const e = t === 1 ? 1 : 1 - 2 ** (-10 * t)
    mesh.rotation.z = from + (to - from) * e

    // 画像切替時にフェーディング
    let opacity = 1
    if (t < T1) {
      opacity = 1
    }
    else if (t < T2) {
      const u = (t - T1) / (T2 - T1)
      opacity = 1 - u
    }
    else {
      const u = (t - T2) / (1 - T2)
      opacity = u
    }
    opacity = Math.min(1, Math.max(0, opacity))

    textureOpacity.value = opacity

    if (!switched && lastT < T2 && t >= T2) {
      texturePath.value = textureImages[Math.floor(Math.random() * textureImages.length)] ?? '/texture/vue.png'
      switched = true
    }
    lastT = t

    if (t >= 1) {
      animating = false
      switched = false
      lastT = 0
    }
  }
})

const { state: texture } = useLoader(
  TextureLoader,
  texturePath,
)
watchEffect(() => {
  if (texture.value) { texture.value.colorSpace = SRGBColorSpace }
})
</script>

<template>
  <TresMesh ref="boxRef" :position="props.position">
    <TresBoxGeometry :args="[1, 1, 1]" />
    <TresMeshStandardMaterial v-if="texture" :map="texture" :transparent="true" :opacity="textureOpacity" />
  </TresMesh>
</template>
