<script setup lang="ts">
const { title, description } = defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="game-more-detail">
    <span>{{ title }}:</span>
    <span>{{ description }}</span>
  </div>
</template>

<style scoped lang="scss">
.game-more-detail {
  display: flex;
  gap: 0.5rem;
  font-size: 0.9rem;

  span {
    flex: 2 1 0;
    color: #67c1f5;

    &:first-child {
      flex: 1 1 0;
      text-transform: uppercase;
      color: #556772;
    }
  }
}
</style>
