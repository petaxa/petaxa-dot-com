<script setup lang="ts">
import { MainSection } from '#components';
</script>

<template>
  <MainSection title="好きなもの">
    <div class="card-list">
      <ul>
        <li>宇宙</li>
        <li>サッカー</li>
        <li>スキー</li>
        <li>料理</li>
      </ul>
    </div>
    <NuxtLink to="/favorite">
      <span>好きなものページへ</span>
      <UIcon :name="'i-lucide-chevron-right'" class="size-5" />
    </NuxtLink>
  </MainSection>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-left: 2rem;
}

.card-list li {
  font-size: var(--typography-h1-size)
}
</style>
