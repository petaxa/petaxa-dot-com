<script setup lang="ts">
import { NuxtPage, NuxtRouteAnnouncer, UApp } from "#components";
import "~/assets/styles/main.css"
</script>
<template>
  <NuxtRouteAnnouncer />

  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
