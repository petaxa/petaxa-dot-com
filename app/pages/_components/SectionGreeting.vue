<script setup lang="ts">
import { NuxtLink, UIcon, MainSection } from '#components';
</script>

<template>
  <MainSection>
    <div class="section-container">
      <img class="icon-image" src="/petaxa/petaxa-icon.png" alt="petaxa icon" />
      <div class="main-content">
        <div class="texts">
          <p>こんにちは、いちむらゆうまといいます。</p>
          <p>petaxa(ぺたぁ)は床に這いつくばっている様を表すオノマトペです。</p>
          <p>慢心を防ぐためにSNSのIDはdamenamepu(ダメ舐めプ)を取りがちです。</p>
          <p>様々なものを中途半端につまみ食いしています。</p>
        </div>
        <div class="sns">
          <NuxtLink to="https://github.com/petaxa" external target="_blank">
            <UIcon :name="'simple-icons:github'" class="size-5" />
            <span>GitHub: @petaxa</span>
          </NuxtLink>
          <NuxtLink to="https://x.com/damenamepu" external target="_blank">
            <UIcon :name="'simple-icons:x'" class="size-5" />
            <span>X: @damenamepu</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </MainSection>
</template>

<style scoped>
.section-container {
  height: 25rem;
  position: relative;
  display: flex;
  align-items: center;
}

.main-content {
  z-index: 1;
  background-color: rgb(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sns {
  display: flex;
  gap: 1.5rem;
}

.icon-image {
  position: absolute;
  top: 0;
  left: 28rem;
  height: 25rem;
  z-index: 0;
}

a {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}
</style>
