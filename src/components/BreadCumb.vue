<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { lang } from '@/common/utils'

const { genre, name } = defineProps<{
  genre: string
  name: string
}>()
</script>

<template>
  <RouterLink to="/#game-list">{{ lang.bread.root }}</RouterLink>
  >
  <span>{{ genre }}</span>
  >
  <span>{{ name }}</span>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: #67c1f5;
}
</style>
