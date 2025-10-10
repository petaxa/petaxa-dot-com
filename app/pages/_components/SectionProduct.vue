<script setup lang="ts">
import { MainSection, NuxtLink } from '#components';
import ProductCard from '~/components/card/ProductCard.vue';
</script>

<template>
  <MainSection title="作ったプロダクト">
    <div class="card-list">
      <ProductCard v-for="i in 10" product-url="https://zenn.dev/petaxa/articles/613511297de2ff" image-url="/image.png"
        product-title="ComfyUIで出力先フォルダを変更する" :product-description="i %2 === 0 ? '短めの説明' : '長めの説明aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'"/>
    </div>
  </MainSection>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-right: 2rem;
}
</style>
