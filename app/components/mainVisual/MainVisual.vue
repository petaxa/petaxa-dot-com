<script setup lang="ts">
import MainVisualBackground from './MainVisualBackground.vue';
import MainVisualLetter from './MainVisualLetter.vue';

defineProps<{
  pause: boolean
}>()
</script>

<template>
  <ClientOnly>
    <TresCanvas :antialias="false" powerPreference="high-performance" :useLegacyLights="false"
      :dpr="[1, Math.min(1, 1.5)]" clearColor="#000000">
      <MainVisualBackground :pause="pause" />
      <MainVisualLetter />

      <TresPerspectiveCamera :position="[0, 0, 8]" :look-at="[0, 0, 0]" :args="[110, 1, 0.1, 1000]" />
      <TresAmbientLight :intensity="1.0" color="white" />
    </TresCanvas>
  </ClientOnly>
</template>

<style scoped></style>
