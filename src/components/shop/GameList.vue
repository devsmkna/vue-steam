<script setup lang="ts">
import { ref } from 'vue'
import type { Game } from '@/common/types'
import { lang } from '@/common/utils'
import GameItem from '@/components/shop/GameItem.vue'
const { games } = defineProps<{
  games: Game[]
}>()

const input = ref<string>('')

const searchGame = () => {
  if (input.value === '') return games
  return games.filter((game: Game) => game.title.toLowerCase().includes(input.value.toLowerCase()))
}
</script>

<template>
  <div class="game-list" id="game-list">
    <div class="game-list-header">
      <h3>{{ lang.bread.root }}</h3>
      <input type="text" v-model="input" placeholder="Search" />
    </div>
    <GameItem v-for="game in searchGame()" :key="game.id" :game="game" />
    <p v-if="input && !searchGame().length">{{ lang.global.nogame }}</p>
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
  min-height: 100vh;

  .game-list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;

    h3 {
      color: white;
      font-size: 2rem;
      overflow: hidden;
      margin: 1rem;
      font-weight: 300;
      letter-spacing: 0.04rem;
    }

    input {
      width: 50%;
      padding: 0.5rem;
      background-color: transparent;
      color: white;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);

      &:focus {
        outline: none;
      }
    }
  }
}
</style>
