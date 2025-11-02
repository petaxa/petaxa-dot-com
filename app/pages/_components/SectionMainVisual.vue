<script setup lang="ts">
import { MainVisual } from '#components';
import { useAnimationStore } from '~/stores/animations';

const [isAnimationEnabled] = useAnimationStore()
</script>

<template>
  <section>
    <div class="section-content">
      <MainVisual :isAnimationEnabled />
    </div>
  </section>
</template>

<style scoped>
.section-content {
  height: 100dvh;
  width: 100%;
}
</style>
