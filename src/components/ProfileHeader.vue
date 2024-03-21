<script setup lang="ts">
import ButtonHeader from './ButtonHeader.vue'

defineProps({
  user: {
    type: Object,
    required: true
  },
  loginHandler: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <div>
    <ButtonHeader
      v-if="user"
      class="dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ user.username }}
      <ul class="dropdown-menu">
        <li>
          <a href="/" class="dropdown-item text-capitalize" @click="() => loginHandler()">Logout</a>
        </li>
      </ul>
    </ButtonHeader>

    <ButtonHeader v-if="user">
      {{ user.wallet + user.currency }}
    </ButtonHeader>
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-flow: column nowrap;
  align-items: end;
}

.btn {
  padding: 0.1rem 0.6rem;
  margin: 0 0.1rem;
  border-radius: 0;
  text-transform: lowercase;
  font-size: 0.75rem;
}
</style>
