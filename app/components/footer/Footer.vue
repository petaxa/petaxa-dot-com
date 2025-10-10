<script setup lang="ts">
import { FooterList } from '#components';

const LIST_MAP = [
  {
    title: "サイトマップ",
    lists: [
      {
        text: "経歴",
        url: "/hoge",
        isExternal: false
      },
      {
        text: "技術的なアウトプット",
        url: "/hoge",
        isExternal: false
      },
      {
        text: "作ったプロダクト",
        url: "/hoge",
        isExternal: false
      },
      {
        text: "好きなもの",
        url: "/hoge",
        isExternal: false
      },
    ]
  },
  {
    title: "ブログ",
    lists: [
      {
        text: "blog.petaxa.com",
        url: "/hoge",
        isExternal: true
      },
      {
        text: "recipe.petaxa.com",
        url: "/hoge",
        isExternal: true
      },
    ]
  },
  {
    title: "コンタクト",
    lists: [
      {
        text: "@damenamepu",
        url: "/hoge",
        isExternal: false,
        icon: "simple-icons:x"
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
      <FooterList v-for="list in LIST_MAP" :title="list.title" :lists="list.lists" />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
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
</style>
