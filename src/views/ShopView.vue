<script setup lang="ts">
import router from '@/router'
import { hero } from '@/common/hero'
import { user, currentLang, lang } from '@/common/utils'
import { heroesDB, heroesError } from '@/common/utils'
import { gamesDB, gamesError } from '@/common/utils'
import { type Game, type Hero } from '@/common/types'
import HeroBanner from '@/components/shop/hero/HeroBanner.vue'
import HeroCardCarousel from '@/components/shop/hero/HeroCardCarousel.vue'
import HeroCard from '@/components/shop/hero/HeroCard.vue'
import GameList from '@/components/shop/GameList.vue'

if (heroesError.value || gamesError.value) {
  router.push('/not-found')
}

const heroGames: Game[] =
  (gamesDB.value &&
    gamesDB.value.filter((game: Game) =>
      heroesDB.value?.find(({ gameId }: Hero) => gameId === +game.id)
    )) ||
  []

const games: Game[] = gamesDB.value || []
</script>

<template>
  <HeroBanner>
    <video :src="hero[currentLang]" autoplay muted loop />
  </HeroBanner>
  <main class="container">
    <HeroCardCarousel class="me-auto ms-auto" :length="heroGames.length">
      <HeroCard
        class="carousel-item"
        v-for="(game, index) in heroGames"
        :class="{ active: index === 0 }"
        :key="index"
        :game="game"
        :description="
          lang.card.hero[
            heroesDB?.find(({ gameId }: Hero) => gameId === +game.id)?.description || 'default'
          ]
        "
        :currency="user?.currency || '$'"
      />
    </HeroCardCarousel>

    <GameList class="me-auto ms-auto game-list" :games="games" />
  </main>
</template>

<style scoped lang="scss">
video,
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.game-list {
  max-width: var(--max-width);
}
</style>
