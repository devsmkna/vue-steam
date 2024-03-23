<script setup lang="ts">
import { user } from '@/common/utils'
import { type Game, type Genre, type Price } from '@/common/types'
import { genresDB, pricesDB } from '@/common/utils'
import PriceComponent from '../PriceComponent.vue'
const { game } = defineProps<{
  game: Game
}>()

const genres = game.genres.map(
  (id: number) => genresDB.value?.find((genre: Genre) => +genre.id === +id)?.name
)
const price = pricesDB.value?.find((price: Price) => price.gameId === +game.id)
</script>

<template>
  <div class="game-item">
    <div class="game-item-media">
      <img :src="game.coverImage" :alt="game.title" />
    </div>
    <div class="game-item-detail">
      <h5>{{ game.title }}</h5>
      <p>{{ genres.join(', ') }}</p>
    </div>
    <div class="game-item-price">
      <PriceComponent :price="price" :currency="user?.currency || '$'" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-item {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;

  .game-item-media {
    flex: 1 1 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .game-item-detail {
    flex: 2 1 0;
    padding: 1rem;
    align-self: flex-start;

    h5 {
      font-weight: 300;
      letter-spacing: 0.04rem;
    }
  }

  .game-item-price {
    flex: 1 1 0;
    text-align: right;
    padding: 0 1rem;
  }
}
</style>
