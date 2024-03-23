<script setup lang="ts">
import router from '@/router'
import type { Game, Genre } from '@/common/types'
import { gamesDB, gamesError, genresDB } from '@/common/utils'
import BreadCumb from '@/components/BreadCumb.vue'

const { id } = defineProps<{
  id: number
}>()

if (gamesError.value || !gamesDB.value?.find((game: Game) => +game.id === +id)) {
  router.push('/not-found')
}

const game: Game | undefined = gamesDB.value?.find((game: Game) => +game.id === +id)
const genre = genresDB.value?.find((genre: Genre) => +genre.id === +(game?.genres[0] || -1))?.name
</script>

<template>
  <div class="me-auto ms-auto game-wrapper">
    <BreadCumb v-if="game && genre" :genre="genre" :name="game?.title" />
    <h3>{{ game?.title }}</h3>
    <!-- PREVIEW WRAPPER -->
    <!-- PREVIEW CAROUSEL + SHOWCASE -->
    <!-- GAME DETAIL -->

    <!-- CTA_BUY -->
  </div>
</template>

<style scoped lang="scss">
.game-wrapper {
  max-width: var(--max-width);
  padding: 2rem 0;

  h3 {
    color: white;
    font-size: 2rem;
    overflow: hidden;
    margin: 0.25rem 0.5rem;
    font-weight: 300;
    letter-spacing: 0.04rem;
  }
}
</style>
