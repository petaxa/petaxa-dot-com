<script setup lang="ts">
import { ref } from '#imports';
import type { TimelineItem } from '@nuxt/ui';
// TODO: いつかクリックしたら詳細が出るようにしたい

const carrer: TimelineItem[] = [
  {
    date: '2002-10-14',
    title: 'つくばで生まれる',
    description: 'おぎゃー',
    icon: 'i-lucide-cake',
    value: "born"
  },
  {
    date: '2019-02',
    title: '高校を辞める | コードを書き始める',
    description: '全日制高校を辞めて通信制高校に編入、お遊び程度にコードを書き始める',
    icon: 'i-lucide-school',
    value: "leave"
  },
  {
    date: '2024-08, 09',
    title: 'サマーインターン',
    description: 'サマーインターンとして2社で2週間ずつ就業\n主にWebフロントのタスクに従事',
    icon: 'i-lucide-code',
    value: "summer-intern"
  },
  {
    date: '2025-04',
    title: '内定者インターンを始める',
    description: '内定先でアルバイトを始める\nフロントエンドはやっていないけどTSは書いている',
    icon: 'i-lucide-ticket-check',
    value: "prospective-intern"
  }
]
const active = ref<TimelineItem['value']>(carrer[1]?.value)
const handle = () => {
  active.value = carrer[2]?.value
}
</script>

<template>
  <div>
    <h1>経歴</h1>
    <UTimeline @update:model-value="(e) => console.log(e)" color="neutral" v-model="active" :items="carrer"
      class="w-96" />
    <p>現在のステータス: {{ active }}</p>
    <button @click="handle">click</button>
  </div>
</template>

<style scoped></style>
