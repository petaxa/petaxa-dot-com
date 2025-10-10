<script setup lang="ts">
const { title } = defineProps<{
  title?: string
}>()
</script>

<template>
  <section>
    <div class="wrapper">
      <div class="section-container">
        <div class="contents">
          <h2 v-if="title">{{ title }}</h2>
          <div class="main-content">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  width: 100%;
}

.section-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.contents {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 2/4;
}

h2 {
  font-weight: bold;
}
</style>
