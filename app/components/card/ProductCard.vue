<script setup lang="ts">
const { productUrl, imageUrl, productTitle, productDescription } = defineProps<{
  productUrl: string
  imageUrl: string
  productTitle: string
  productDescription: string;
}>()
</script>

<template>
  <div class="wrapper">
    <NuxtLink :to="productUrl" target="_blank">
      <div class="output-container">
        <img class="product-image" :src="imageUrl" alt="">
        <p class="title">{{ productTitle }}</p>
        <p class="description">{{ productDescription }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.wrapper * {
  text-decoration: none;
}

.output-container {
  width: 24rem;
  background-color: var(--color-primary-base);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.product-image {
  width: 22rem;
  padding: 1rem;
}

.title {
  font-weight: bold;
}

.description {
  width: 100%;
  height: 8rem;
  padding: 2rem;
  font-size: var(--typography-body2-size);
  overflow-wrap: anywhere;
}
</style>
