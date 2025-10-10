<script setup lang="ts">
import { Header, Footer } from "#components"
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>
