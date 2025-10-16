<script setup lang="ts">
import MainVisualBackground from './MainVisualBackground.vue';
import MainVisualLetter from './MainVisualLetter.vue';

defineProps<{ pause: boolean }>()
</script>

<template>
  <TresCanvas>
    <MainVisualBackground :pause="pause" />
    <MainVisualLetter />
    <TresPerspectiveCamera :position="[0, 0, 8]" :look-at="[0, 0, 0]" :args="[110, 1, 0.1, 1000]" />
    <TresAmbientLight :intensity="1.0" color="white" />
  </TresCanvas>
</template>

<style scoped></style>
