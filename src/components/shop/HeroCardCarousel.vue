<script setup lang="ts">
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
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#hero-card-carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.carousel {
  width: 1200px;
  position: relative;

  .carousel-inner {
    width: 80%;
    height: 350px;
    background-color: red;
  }

  .carousel-indicators {
    position: absolute;
    bottom: -3rem;

    button {
      width: 15px;
      height: 10px;
      border-radius: 4px;
      background-color: hsla(202, 60%, 100%, 0.2);
      border: none;
      margin: 0 2px;

      &:hover {
        background-color: hsla(202, 60%, 100%, 0.3);
      }

      &.active {
        background-color: hsla(202, 60%, 100%, 0.4);
      }
    }
  }
}
</style>
