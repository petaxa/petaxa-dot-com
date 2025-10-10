<script setup lang="ts">
import SectionMainVisual from './_components/SectionMainVisual.vue';
import SectionGreeting from './_components/SectionGreeting.vue';
import SectionCarrer from './_components/SectionCarrer.vue';
import SectionTech from './_components/SectionTech.vue';
import SectionProduct from './_components/SectionProduct.vue';
import SectionFavorite from './_components/SectionFavorite.vue';
import SectionBlog from './_components/SectionBlog.vue';

</script>

<template>
  <div>
    <div class="section-container">
      <SectionMainVisual />
      <SectionGreeting />
      <SectionCarrer />
      <SectionTech />
      <SectionProduct />
      <SectionFavorite />
      <SectionBlog />
    </div>
  </div>
</template>

<style scoped>
.section-container {
  display: flex;
  position: relative;
  flex-direction: column;
  row-gap: 3rem;

  @media (--mobile) {
    row-gap: 1rem;
  }
}
</style>
