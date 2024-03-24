<script setup lang="ts">
import type { Price } from '@/common/types'
import { lang } from '@/common/utils'
import GamePriceComponent from '@/components/GamePriceComponent.vue'

const { name, price, currency } = defineProps<{
  name: string
  price: Price | undefined
  currency: string
}>()

</script>

<template>
  <div class="game-CTA">
    <p>{{ (price && price.price > 0 ? lang.game.buy : lang.game.play) + ' ' + name }}</p>
    <GamePriceComponent
      :price="price"
      :currency="currency"
      :cta="price && price.price > 0 ? lang.game.buy : lang.game.play"
    />
  </div>
</template>

<style scoped lang="scss">
.game-CTA {
  background: linear-gradient(-60deg, rgba(226, 244, 255, 0.3) 5%, rgba(84, 107, 115, 0.3) 95%);
  border-radius: 4px;
  padding: 1rem 2rem 1.8rem;
  position: relative;
  margin-top: 1rem;

  p {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
  }
}
</style>
