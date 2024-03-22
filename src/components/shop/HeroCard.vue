<script setup lang="ts">
import type { Game } from '@/common/types'
defineProps<{
  game: Game
  description: String
}>()
</script>

<template>
  <div class="hero-card">
    <div class="hero-card-media">
      <img :src="game.coverImage" :alt="game.title" />
    </div>
    <div class="hero-card-details">
      <h3>{{ game.title }}</h3>
      <p>{{ description }}</p>
      <p>{{ game.developer }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-card {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: #0b151e;

  .hero-card-media {
    flex: 2 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .hero-card-details {
    flex: 1 1 0;
  }

  img {
    height: 100%;
    object-fit: contain;
  }

  h3 {
    color: white;
    font-size: 1.5rem;
    overflow: hidden;
    line-height: 2rem;
    margin: 1rem 0.5rem;
    font-weight: 400;
    letter-spacing: 0.04rem;
  }
}
</style>
