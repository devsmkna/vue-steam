<script setup lang="ts">
import { lang } from '@/common/utils'
import { type Price } from '@/common/types'
const { price, currency } = defineProps<{ price: Price | undefined; currency: string }>()
</script>

<template>
  <div class="price-wrapper">
    <div v-if="price && price.discountPercentage > 0" class="price-discount-wrapper">
      <span class="price-discount">-{{ price.discountPercentage }}%</span>
      <span class="price-original">{{ price.price + currency }}</span>
      <span class="price-new">{{
        Math.floor(price.price * (1 - price.discountPercentage / 100) * 100) / 100 + currency
      }}</span>
    </div>
    <div v-else class="price-simple">
      {{ price && price.price > 0 ? price.price + currency : lang.card.free }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.price-wrapper {
  font-family: Arial, Helvetica, sans-serif;

  .price-discount-wrapper {
    display: inline-flex;
    background-color: #344654;

    * {
      padding: 0.15rem 0.35rem;
      line-height: 1rem;
    }

    .price-discount {
      font-weight: bold;
      color: #bee31c;
      background-color: #4c6b22;
    }

    .price-original {
      color: #5b798e;
      font-size: 0.85rem;
      text-decoration: line-through;
    }

    .price-new {
      font-size: 0.85rem;
      color: #bee31c;
    }
  }
  .price-simple {
    font-size: 0.8rem;
    padding: 0.15rem 0.35rem;
    line-height: 1.2rem;
  }
}
</style>
