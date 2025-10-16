<script setup lang="ts">
import { computed, useWindowSize } from '#imports';
import SkillMesh from './MainVisualSkillMesh.vue'

defineProps<{ pause: boolean }>()
const { width, height } = useWindowSize()
const row = computed(() => Math.ceil(width.value / 50))
const col = computed(() => Math.ceil(height.value / 50))
</script>

<template>
  <template v-for="j in row">
    <SkillMesh v-for="i in col" :key="`${ i } -${ j }`"
      :position="[j * 1.3 - Math.ceil(row / 2), i * 1.3 - Math.ceil(col / 2), 2]" :pause />
  </template>
</template>
