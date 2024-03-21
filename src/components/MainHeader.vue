<script setup lang="ts">
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faDownload, faUsers } from '@fortawesome/free-solid-svg-icons'
import type { User } from '@/api/types'
import ProfileHeader from '@/components/ProfileHeader.vue'
import ButtonHeader from '@/components/ButtonHeader.vue'

const isLogged = ref<boolean>(false)
const user = ref<User | null>(null)

const loginHandler = () => {
  isLogged.value = !isLogged.value

  if (!isLogged.value) {
    user.value = null
  }

  // get user data
  user.value = {
    username: 'exmachnadeus',
    avatar: 'https://store.akamai.steamstatic.com/public/images/v6/avatar_default.jpg',
    status: 'online',
    lastSeen: '2 days ago',
    games: 0,
    name: 'Davide Visco',
    wallet: 0.06,
    level: 7,
    place: 'Catania, Italy',
    currency: '€'
  }
}
</script>

<template>
  <header class="main-header">
    <div class="d-flex align-items-baseline align-self-end">
      <ButtonHeader
        :class="{ 'text-capitalize': true, 'btn-cta': !isLogged, 'btn-border': isLogged }"
      >
        <FontAwesomeIcon :icon="faDownload" />
        Install Steam
      </ButtonHeader>

      <div v-if="!isLogged">
        <ButtonHeader @click="loginHandler"> Login </ButtonHeader>
        |
        <ButtonHeader class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Language
          <ul class="dropdown-menu">
            <li><a href="#" class="dropdown-item text-capitalize">English</a></li>
          </ul>
        </ButtonHeader>
      </div>

      <ButtonHeader v-if="isLogged" class="btn-border" :class="{ 'btn-cta': isLogged }">
        <FontAwesomeIcon :icon="faUsers" />
      </ButtonHeader>
      <ButtonHeader v-if="isLogged" class="btn-border" :class="{ 'btn-cta': isLogged }">
        <FontAwesomeIcon :icon="faBell" />
      </ButtonHeader>
      <ProfileHeader v-if="isLogged && user" :user="user" :loginHandler="loginHandler" />
    </div>

    <nav class="nav align-items-baseline">
      <RouterLink to="/" class="navbar-brand">
        <img
          src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
          alt="Steam logo"
        />
      </RouterLink>
      <RouterLink to="/">Store</RouterLink>
      <RouterLink to="/community">Community</RouterLink>
      <RouterLink to="/profile" v-if="isLogged">{{ user && user.username }}</RouterLink>
      <RouterLink to="/chat" v-if="isLogged">Chat</RouterLink>
      <RouterLink to="/about" v-if="!isLogged">About</RouterLink>
      <RouterLink to="/support">Support</RouterLink>
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

.btn {
  padding: 0.1rem 0.6rem;
  margin: 0.1rem;
  border-radius: 0;
  text-transform: lowercase;
  font-size: 0.75rem;
}

.btn-border {
  background-color: #3d4450;
}

.btn-cta {
  background-color: #5c7e10;
  color: white;
}
</style>
