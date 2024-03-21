<script setup lang="ts">
import { ref } from 'vue'

const isLogged = ref<boolean>(false)

// check if logged
// if logged: isLogged true, get user data
</script>

<template>
  <header class="main-header">
    <div class="d-flex align-items-baseline align-self-end">
      <button type="button" class="btn btn-sm btn-install">
        <img
          src="https://store.akamai.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1"
          alt="install steam"
          class="mb-1 me-2"
        />
        Install Steam
      </button>

      <div v-if="!isLogged">
        <button type="button" class="btn btn-sm" @click="isLogged = true">Login</button>
        |
        <button
          type="button"
          class="btn btn-sm dropdown-toggle"
          v-if="!isLogged"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Language
        </button>
        <ul class="dropdown-menu">
          <li><a href="#" class="dropdown-item">English</a></li>
        </ul>
      </div>

      <button type="button" class="btn" v-if="isLogged">Visuale Famiglia</button>
      <button type="button" class="btn" v-if="isLogged">Notifiche</button>
      <button type="button" class="btn" v-if="isLogged">Account</button>
      <button type="button" class="btn" v-if="isLogged" @click="isLogged = false">Logout</button>
    </div>

    <nav class="nav align-items-baseline">
      <RouterLink to="/" class="navbar-brand">
        <img
          src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
          alt="Steam logo"
        />
      </RouterLink>
      <RouterLink to="/">Store</RouterLink>
      <RouterLink to="/not-found">Community</RouterLink>
      <RouterLink to="/profile" v-if="isLogged">USERNAME</RouterLink>
      <RouterLink to="/not-found" v-if="isLogged">Chat</RouterLink>
      <RouterLink to="/profile" v-if="!isLogged">About</RouterLink>
      <RouterLink to="/not-found">Support</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.main-header {
  position: absolute;
  top: 0;
  bottom: auto;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: start;
  height: 100px;
  font-family: 'Noto Sans', sans-serif;
  padding: 0.3rem calc(calc(100vw - var(--max-width)) / 2);
  margin: 0 auto;
  font-size: 0.8rem;
  color: rgb(187, 185, 185);
}

nav {
  font-weight: 500;
  gap: 1rem;

  a {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    font-size: 1.1rem;
    padding: 1rem 0 0;

    &[aria-current='page']:not(.navbar-brand) {
      color: #1a9fff;
      border-bottom: 3px solid #1a9fff;
    }

    &.navbar-brand {
      padding: 0;

      img {
        height: 3.2rem;
        margin-right: 1rem;
      }
    }
  }
}

.btn-sm {
  padding: 0.15rem 0.5rem;
  margin: 0;
  border-radius: 0;
  text-transform: lowercase;
  font-size: 0.75rem;
}

.btn-install {
  background-color: #5c7e10;
  text-transform: capitalize;
  color: white;
}
</style>
