<script setup lang="ts">
import { ContactShadows, Edges, Text3D } from '@tresjs/cientos'
</script>

<template>
  <Suspense>
    <Text3D
      font="/fonts/optimer_bold.typeface.json"
      text="_(  _´*-*)_"
      :position="[0, 0, 5]"
      :rotation="[0, 0, 0]"
      :size="1.5"
      :height="0.2"
    >
      <TresMeshBasicMaterial color="#eeeeef" />
      <Edges :threshold="30" color="#808080" />
    </Text3D>
  </Suspense>
</template>

<style scoped></style>
