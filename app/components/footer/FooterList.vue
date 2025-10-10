<script setup lang="ts">
import { UIcon } from '#components';
const { title, lists } = defineProps<{
  title: string
  lists: {
    text: string
    url: string
    isExternal: boolean
    icon?: string
  }[]
}>()
</script>

<template>
  <div>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="list in lists">
        <NuxtLink :to="list.url">
          <UIcon v-if="list.icon" :name="list.icon" class="size-5" aria-label="Xアイコン" />{{
            list.text }}
          <UIcon v-if="list.isExternal" :name="'i-lucide-external-link'" class="size-5" aria-label="Xアイコン" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  font-weight: bold;
}
</style>
