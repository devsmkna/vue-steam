<script setup lang="ts">
import { lang } from '@/common/utils'
import { type Price } from '@/common/types'
const { price, currency } = defineProps<{
  price: Price | undefined
  currency: string
  cta: string
}>()
</script>

<template>
  <div class="game-price-wrapper">
    <div v-if="price && price.discountPercentage > 0" class="d-flex game-price-discount-wrapper">
      <span class="game-price-discount">-{{ price.discountPercentage }}%</span>
      <div class="game-price-detail-wrapper">
        <span class="game-price-original">{{ price.price + currency }}</span>
        <span class="game-price-new">{{
          Math.floor(price.price * (1 - price.discountPercentage / 100) * 100) / 100 + currency
        }}</span>
      </div>
    </div>
    <div v-else class="game-price-simple">
      {{ price && price.price > 0 ? price.price + currency : lang.card.free }}
    </div>
    <button type="button" class="btn btn-sm">
      {{ cta }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.game-price-wrapper {
  position: absolute;
  right: 1rem;
  bottom: -1rem;
  left: auto;
  top: auto;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.2rem;
  padding: 0.15rem 0.15rem;

  .game-price-discount-wrapper {
    display: flex;

    .game-price-discount {
      color: #b7e816;
      background: linear-gradient(to right, #75b022 5%, #588a1b 95%);
      font-size: 1.7rem;
      font-weight: 700;
      padding: 0 0.5rem;
    }

    .game-price-detail-wrapper {
      background-color: #344654;
      display: flex;
      flex-direction: column;
      justify-content: baseline;
      align-items: flex-end;
      padding: 0.1rem 0.5rem;

      .game-price-original {
        font-size: 0.9rem;
        text-decoration: line-through;
        color: #556772;
        line-height: 1rem;
      }

      .game-price-new {
        font-size: 1.1rem;
        color: #b7e816;
        padding-left: 1rem;
        line-height: 1.1rem;
      }
    }
  }

  .game-price-simple,
  button {
    padding: 0.3rem 1.2rem;
  }

  button {
    color: #d2efa9;
    background: linear-gradient(to right, #75b022 5%, #588a1b 95%);
    font-size: 1.2rem;
  }
}
</style>
