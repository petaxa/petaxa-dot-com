<script setup lang="ts">
import { MainSection, NuxtLink } from '#components';
import TechCard from '~/components/card/TechCard.vue';

const items = [
  {
    title: "🚧レシピブログを書きたい！🚧",
    url: "https://recipie.petaxa.com",
    image: ""
  }, {
    title: "🚧興味に対する雑記を書くところがほしい！🚧",
    url: "https://blog.petaxa.com",
    image: ""
  }
]
</script>

<template>
  <MainSection title="ブログ">
    <div class="card-list">
      <TechCard v-for="item in items" :content-url="item.url" :image-url="item.image" :content-title="item.title" />
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
