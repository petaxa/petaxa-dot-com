<script setup lang="ts">
import { MainSection, NuxtLink } from '#components';
import TechCard from '~/components/card/TechCard.vue';
</script>

<template>
  <MainSection title="技術的なアウトプット">
    <div class="card-list">
      <TechCard v-for="i in 10" content-url="https://zenn.dev/petaxa/articles/613511297de2ff"
        :image-url="i % 2 === 0 ? '/image.png' : null" content-title="ComfyUIで出力先フォルダを変更する" />
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
