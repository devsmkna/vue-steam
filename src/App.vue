<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/components/header/MainHeader.vue'
</script>

<template>
  <MainHeader />
  <Suspense>
    <RouterView />
  </Suspense>
</template>
