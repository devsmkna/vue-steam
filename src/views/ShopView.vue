<script setup lang="ts">
import { hero } from '@/common/hero'
import { currentLang, games as gamesDB, hero as heroDB } from '@/common/utils'
import type { Game, Hero } from '@/common/types'
import HeroBanner from '@/components/shop/HeroBanner.vue'
import HeroCardCarousel from '@/components/shop/HeroCardCarousel.vue'
import HeroCard from '@/components/shop/HeroCard.vue'

const heroGames: Hero[] = heroDB.value
const games: Game[] = heroGames.map(({ gameId }: Hero) =>
  gamesDB.value.find((game: Game) => gameId === +game.id)
)
</script>

<template>
  <main>
    <HeroBanner>
      <video :src="hero[currentLang]" autoplay muted loop />
    </HeroBanner>

    <aside></aside>

    <HeroCardCarousel class="me-auto ms-auto" :length="games.length">
      <HeroCard
        class="carousel-item"
        v-for="(game, index) in games"
        :class="{ active: index === 0 }"
        :key="index"
        :game="game"
        :description="heroGames.find(({ gameId }: Hero) => gameId === +game.id)?.description || ''"
      />
    </HeroCardCarousel>
  </main>
</template>

<style scoped lang="scss">
video,
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
