<script setup lang="ts">
import { developersDB, genresDB, lang, publishersDB } from '@/common/utils'
import { type Game, type Developer, type Publisher, type Genre } from '@/common/types'
import GameInfo from '@/components/game/GameInfo.vue'
import GameGenre from '@/components/game/GameGenre.vue'
const { game } = defineProps<{
  game: Game
}>()

const developer = developersDB.value?.find(
  (developer: Developer) => +developer.id === +game.developer
)?.name
const publisher = publishersDB.value?.find(
  (publisher: Publisher) => +publisher.id === +game.publisher
)?.name
const genres = genresDB.value
  ?.filter((genre: Genre) => game.genres.includes(+genre.id))
  .map((genre: Genre) => genre.name)
</script>

<template>
  <div class="game-detail">
    <img :src="game.coverImage" :alt="game.title" />
    <p>{{ game.description }}</p>
    <GameInfo v-if="developer" :title="lang.game.developer" :description="developer" />
    <GameInfo v-if="publisher" :title="lang.game.publisher" :description="publisher" />
    <div class="game-tags">
      <GameGenre v-for="genre in genres" :genre="genre" :key="genre" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-detail {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  img {
    width: 100%;
    margin-bottom: 1rem;
  }

  .game-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }
}
</style>
