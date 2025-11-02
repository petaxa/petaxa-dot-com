<script setup lang="ts">
import { UIcon } from '#components';
import { useAnimationStore } from '~/stores/animations';

const [isAnimationEnabled, setAnimationEnabled] = useAnimationStore()
</script>

<template>
  <header>
    <Transition name="fade">
      <div class="header">
        <NuxtLink class="logo" to="/">petaxa.com</NuxtLink>
        <div class="header-controller">
          <div class="controller-item">
            <button type="button" :aria-label="isAnimationEnabled ? 'アニメーションを停止' : 'アニメーションを再生'"
              @click="setAnimationEnabled(!isAnimationEnabled)">
              <UIcon :name="isAnimationEnabled ? 'i-lucide-circle-pause' : 'i-lucide-circle-play'" class="size-5"
                :aria-label="isAnimationEnabled ? 'アニメーションを停止' : 'アニメーションを再生'" />
              <span>{{ isAnimationEnabled ? '停止する' : '再生する' }}</span>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: var(--color-primary-base);
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  align-items: center;
  padding: 0 3rem;
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.header-controller {
  display: flex;
  gap: 2rem;
}

.controller-item {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

button {
  display: flex;
  padding: 0 0.125rem;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
