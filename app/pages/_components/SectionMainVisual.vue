<script setup lang="ts">
import { MainVisual } from '#components';
const pause = false
</script>

<template>
  <section>
    <div class="section-content">
      <MainVisual :pause />
    </div>
  </section>
</template>

<style scoped>
.section-content {
  height: 100dvh;
  width: 100%;
}
</style>
