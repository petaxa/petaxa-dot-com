<script setup lang="ts">
const { contentUrl, imageUrl, contentTitle } = defineProps<{
  contentUrl: string
  imageUrl: string | null
  contentTitle: string
}>()
</script>

<template>
  <div class="output-container">
    <NuxtLink :to="contentUrl" target="_blank">
      <img v-if="imageUrl" :src="imageUrl" :alt="contentTitle">
      <span v-else>{{ contentTitle }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.output-container {
  width: 24rem;
  aspect-ratio: 1.91 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.output-container * {
  font-weight: bold;
}
</style>
