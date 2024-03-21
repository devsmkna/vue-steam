<script setup lang="ts">
import GlobalHeader from '@/components/header/GlobalHeader.vue'
import NavigationHeader from '@/components/header/NavigationHeader.vue'
</script>

<template>
  <header class="main-header">
    <GlobalHeader />
    <NavigationHeader />
  </header>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');

.main-header {
  display: flex;
  align-items: center;
  position: relative;
  height: 100px;
  padding: 0.3rem calc(calc(100vw - var(--max-width)) / 2);
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
  font-size: 0.8rem;
  color: #b8b6b4;
  background-color: #171d25;
}
</style>
