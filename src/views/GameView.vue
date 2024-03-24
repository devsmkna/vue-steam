<script setup lang="ts">
import router from '@/router'
import type { Game, Genre, Price } from '@/common/types'
import { lang, user } from '@/common/utils'
import { gamesDB, gamesError, genresDB, pricesDB } from '@/common/utils'
import BreadCumb from '@/components/BreadCumb.vue'
import GameDetail from '@/components/game/GameDetail.vue'
import GameCTA from '@/components/game/GameCTA.vue'

const { id } = defineProps<{
  id: number
  title: string
}>()

if (gamesError.value) {
  router.push('/not-found')
}

const game: Game | undefined = gamesDB.value?.find((game: Game) => +game.id === +id)
const genre = genresDB.value?.find((genre: Genre) => +genre.id === +(game?.genres[0] || -1))?.name
const price = pricesDB.value?.find((price: Price) => +price.gameId === +(game?.id || -1))
</script>

<template>
  <div class="me-auto ms-auto game-wrapper" v-if="game">
    <BreadCumb v-if="game && genre" :genre="genre" :name="game?.title" />
    <h3>{{ game?.title }}</h3>
    <div class="game-main">
      <div class="game-carousel">
        <img :src="game.coverImage" alt="" />
      </div>

      <GameDetail :game="game" />
    </div>

    <GameCTA :name="game.title" :price="price" :currency="user?.currency || '$'" />
  </div>
  <div v-else>{{ lang.global.nogame }}</div>
</template>

<style scoped lang="scss">
.game-wrapper {
  max-width: var(--max-width);
  padding: 2rem 0;

  h3 {
    color: white;
    font-size: 2rem;
    margin: 0.5rem 0rem;
    font-weight: 300;
    letter-spacing: 0.04rem;
  }

  .game-main {
    display: flex;
    gap: 1rem;
    background: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.4) 100%);

    .game-carousel {
      flex: 2 1 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .game-detail {
      flex: 1 1 0;
    }
  }
}
</style>
