<script setup lang="ts">
import { ref } from '#imports';
import MainVisualLetter from './MainVisualLetter.vue'

defineProps<{ isAnimationEnabled: boolean }>()
const pointLight = ref()
</script>

<template>
  <ClientOnly>
    <TresCanvas :antialias="false" powerPreference="high-performance" :dpr="[1, 1.5]" clearColor="#000000"
      :aria-label="isAnimationEnabled ? 'petaxaに関するテキストが順に切り替わりながら3Dで表示されている' : 'petaxaに関するテキストが3Dで表示されている'">
      <MainVisualLetter :isAnimationEnabled />
      <TresPerspectiveCamera :position="[0, 0, 8]" :look-at="[0, 0, 0]" :args="[110, 1, 0.1, 1000]" />
      <TresAmbientLight :intensity="1.0" color="white" />

      <TresPointLight ref="pointLight" :position="[0, 5, 0]" :intensity="300" :decay="0" color="#ffffff" />
    </TresCanvas>
  </ClientOnly>
</template>
