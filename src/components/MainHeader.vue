<script setup lang="ts">
import { ref } from 'vue'

const isLogged = ref<boolean>(false)

// check if logged
// if logged: isLogged true, get user data
</script>

<template>
  <header class="position-absolute top-0 start-0 end-0 z-index-1 bg-dark">
    <nav class="nav navbar-dark bg-dark display-flex flex-row align-items-center">
      <RouterLink to="/" class="navbar-brand">
        <img
          src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
          alt="Steam logo"
        />
      </RouterLink>
      <RouterLink to="/">Shop</RouterLink>
      <RouterLink to="/not-found">Community</RouterLink>
      <RouterLink to="/profile" v-if="isLogged">About</RouterLink>
      <RouterLink to="/not-found">Chat</RouterLink>
      <RouterLink to="/not-found">Help</RouterLink>
    </nav>
    <div class="cta-actions">
      <button type="button" class="btn btn-dark">Installa Steam</button>

      <button type="button" class="btn btn-dark" v-if="!isLogged" @click="isLogged = true">
        Accedi
      </button>
      <button type="button" class="btn btn-dark" v-if="!isLogged">Lingua</button>

      <button type="button" class="btn btn-dark" v-if="isLogged">Visuale Famiglia</button>
      <button type="button" class="btn btn-dark" v-if="isLogged">Notifiche</button>
      <button type="button" class="btn btn-dark" v-if="isLogged">Account</button>
      <button type="button" class="btn btn-dark" v-if="isLogged" @click="isLogged = false">
        Disconnettiti
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  height: 100px;
  font-family: 'Noto Sans', sans-serif;
}

nav {
  font-weight: 500;
  gap: 1rem;

  :first-child {
    margin-right: 2rem;
  }

  img {
    height: 3rem;
  }

  a {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
  }
}

.cta-actions button {
  :first-child {
    background-color: greenyellow;
  }
}
</style>
