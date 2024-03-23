<script setup lang="ts">
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  length: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div id="hero-card-carousel" class="carousel slide carousel-fade">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#hero-card-carousel"
        :data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#hero-card-carousel"
        v-for="i in length - 1"
        :data-bs-slide-to="i"
        :key="i"
        :aria-label="`Slide ${i}`"
      ></button>
    </div>
    <div class="carousel-inner ms-auto me-auto">
      <slot></slot>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#hero-card-carousel"
      data-bs-slide="prev"
    >
      <FontAwesomeIcon :icon="faChevronLeft" size="3x" />
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#hero-card-carousel"
      data-bs-slide="next"
    >
      <FontAwesomeIcon :icon="faChevronRight" size="3x" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  width: 1200px;
  position: relative;
  padding: 3.5rem 0;
  background-image: url(https://store.akamai.steamstatic.com/public/images/v6/home/cluster_bg.png?v=1);
  background-repeat: no-repeat;
  background-position: center center;
  border-bottom: 1px solid rgba($color: black, $alpha: 0.1);

  .carousel-inner {
    width: 81%;
    height: 360px;
    background-color: red;
  }

  .carousel-indicators {
    button {
      width: 15px;
      height: 9px;
      border-radius: 2px;
      background-color: hsla(202, 60%, 100%, 0.2) !important;
      border: none;
      margin: 0 2px;

      &:hover {
        background-color: hsla(202, 60%, 100%, 0.3) !important;
      }

      &.active {
        background-color: hsla(202, 60%, 100%, 0.4) !important;
      }
    }
  }
}
</style>
