<script setup lang="ts">
import { MainSection } from '#components';
import TechCard from '~/components/card/TechCard.vue';
const items = [
  {
    title: "PrimeVue ベースの UI コンポーネントライブラリ Volt を使ってみよう",
    url: "https://zenn.dev/comm_vue_nuxt/articles/d6744684c78b91",
    image: "./tech/zenn-prime-vue.png"
  },
  {
    title: "Vue.js のための BOARDGAME.IO チュートリアル",
    url: "https://zenn.dev/comm_vue_nuxt/articles/f59b0b8cae13d0",
    image: "./tech/zenn-boadgame-io.png"
  },
  {
    title: "Vue Fes Japan 2024 でボランティアスタッフをやってきた",
    url: "https://zenn.dev/comm_vue_nuxt/articles/ad65683630e5e7",
    image: "./tech/zenn-vue-fes.png"
  },
  {
    title: "Vue 3 + Vite で Monaca Editor の Web Worker を設定する",
    url: "https://zenn.dev/comm_vue_nuxt/articles/b1129cfca569ec",
    image: "./tech/zenn-monaco-editor.png"
  },
  {
    title: "最新のNuxtでElectronの無限リロードを回避する",
    url: "https://zenn.dev/comm_vue_nuxt/articles/cbaf30c7054c40",
    image: "./tech/zenn-nuxt-electron-loop.png"
  },
  {
    title: "Recently my Journal 2024/10",
    url: "https://petaxa.github.io/Recently-my-Journal-2024-10/",
    image: "./tech/slidev-recently-journal.png"
  },
  {
    title: "BEENOS インターン振り返り",
    url: "https://petaxa.github.io/look-back-beenos/",
    image: "./tech/slidev-beenos.png"
  },
  {
    title: "Nuxt Modules を使って Nuxt3 に Electronを導入しよう",
    url: "https://zenn.dev/comm_vue_nuxt/articles/0c4725404b040e",
    image: "./tech/zenn-nuxt-electron.png"
  },
  {
    title: "Vue Tokyo Meetup #20 に参加してきました",
    url: "https://zenn.dev/comm_vue_nuxt/articles/8228fa18d2def6",
    image: "./tech/zenn-v-tokyo.png"
  },
  {
    title: "ComfyUIで出力先フォルダを変更する",
    url: "https://zenn.dev/petaxa/articles/613511297de2ff",
    image: "./tech/zenn-comfi-ui.png"
  },
]
</script>

<template>
  <MainSection title="技術的なアウトプット">
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
