<script setup lang="ts">
import type { Game } from '@/common/types'
import { lang } from '@/common/utils'
import GameItem from '@/components/shop/GameItem.vue'
const { games } = defineProps<{
  games: Game[]
}>()
</script>

<template>
  <div class="game-list">
    <h3>{{ lang.bread.root }}</h3>
    <GameItem
      v-for="game in games"
      :key="game.id"
      :game="game"
      @click="$router.push(`/app/${game.id}`)"
    />
  </div>
</template>

<style scoped lang="scss">
.game-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.4rem;
  margin: 1rem;

  h3 {
    color: white;
    font-size: 2rem;
    overflow: hidden;
    margin: 1rem;
    font-weight: 300;
    letter-spacing: 0.04rem;
  }
}
</style>
