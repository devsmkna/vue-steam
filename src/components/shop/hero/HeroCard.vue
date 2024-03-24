<script setup lang="ts">
import { type Game, type Price } from '@/common/types'
import { pricesDB, pricesError } from '@/common/utils'
import router from '@/router'
import PriceComponent from '@/components/PriceComponent.vue'

const { game, description } = defineProps<{
  game: Game
  description: string
  currency: string
}>()

if (pricesError.value) {
  router.push('/not-found')
}

const price: Price | undefined = pricesDB.value?.find((price: Price) => price.gameId === +game.id)
</script>

<template>
  <RouterLink
    class="hero-card"
    :to="{ name: 'app', params: { id: game.id, title: game.title.replace(/\s/g, '_') } }"
  >
    <div class="hero-card-media">
      <img :src="game.coverImage" :alt="game.title" />
    </div>
    <div class="hero-card-details">
      <h3>{{ game.title }}</h3>
      <div class="hero-card-details-photo"></div>
      <p>{{ description }}</p>
      <PriceComponent :price="price" :currency="currency" />
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.hero-card {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: #0b151e;
  cursor: pointer;
  color: var(--color-text);
  text-decoration: none;

  .hero-card-media {
    flex: 2 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .hero-card-details {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5rem 0;

    .hero-card-details-photo {
      height: 30%;
    }

    h3 {
      color: white;
      font-size: 2rem;
      overflow: hidden;
      margin: 0.25rem 0.5rem;
      font-weight: 300;
      letter-spacing: 0.04rem;
      height: 5rem;
    }

    p {
      color: white;
      font-size: 1.6rem;
      overflow: hidden;
      line-height: 2rem;
      margin: 0.25rem 0.5rem;
      font-weight: 300;
      letter-spacing: 0.06rem;
    }
  }

  img {
    height: 100%;
    object-fit: contain;
  }
}
</style>
