<script setup lang="ts">
import { lang } from '@/common/utils'

const { genre, name } = defineProps<{
  genre: string
  name: string
}>()
</script>

<template>
  <span>{{ lang.bread.root }} > {{ genre }} > {{ name }}</span>
</template>
