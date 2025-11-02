<script setup lang="ts">
import { FooterList } from '#components';

const LIST_MAP = [
  {
    title: "コンタクト",
    lists: [
      {
        text: "@damenamepu",
        url: "https://x.com/damenamepu",
        isExternal: true,
        icon: "simple-icons:x"
      },
      {
        text: "@petaxa",
        url: "https://github.com/petaxa",
        isExternal: true,
        icon: "simple-icons:github"
      },
    ]
  },
]
</script>

<template>
  <footer>
    <div class="footer">
      <div class="logo">
        <NuxtLink to="/">petaxa.com</NuxtLink>
      </div>
      <div class="content">
        <FooterList v-for="list in LIST_MAP" :title="list.title" :lists="list.lists" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 5rem;
  display: flex;
  width: 100%;
  padding: 3rem;
  background-color: var(--color-primary-base);
  z-index: 999;
}

.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.logo a {
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
}

.content {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
