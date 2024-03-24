<script setup lang="ts">
const { genre } = defineProps<{
  genre: string
}>()
</script>

<template>
  <button type="button">
    {{ genre }}
  </button>
</template>

<style scoped lang="scss">
button {
  background-color: #233d50;
  border: none;
  border-radius: 2px;
  padding: 0 0.4rem;
  font-size: 0.85rem;
  color: #67c1f5;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
