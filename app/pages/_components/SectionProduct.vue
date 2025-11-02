<script setup lang="ts">
import { MainSection, NuxtLink } from '#components';
import ProductCard from '~/components/card/ProductCard.vue';

const items = [
  {
    title: "Dounatsu",
    image: "./product/dounatsu.png",
    url: "https://github.com/petaxa/DOUNATSU",
    description: "バイトの日報を書くために作ったフォーム形式の日報ジェネレータ"
  },
  {
    title: "ばんぱく!Tierメーカー",
    image: "./product/expo-tier-maker.png",
    url: "https://expo-tier-maker.petaxa.com/",
    description: "大阪関西万博のパビリオンでティア表を作るためのWebアプリ"
  },
  {
    title: "ばんぱく!待ち時間マップ",
    image: "./product/expo-waiting-map.png",
    url: "https://expo-waiting-map.petaxa.com/",
    description: "大阪関西万博のパビリオン待ち時間情報をマップ形式で表示するWebアプリ"
  }
]
</script>

<template>
  <MainSection title="作ったプロダクト">
    <div class="card-list">
      <ProductCard v-for="item in items" :product-url="item.url" :image-url="item.image" :product-title="item.title"
        :product-description="item.description" />
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
