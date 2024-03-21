<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { user } from '@/utils'

const navigator = [
  {
    name: 'Store',
    path: '/'
  },

  {
    name: 'Community',
    path: '/community'
  },

  {
    name: user.value?.username || 'Profile',
    path: '/profile',
    isLogged: true
  },

  {
    name: 'Chat',
    path: '/chat',
    isLogged: true
  },

  {
    name: 'About',
    path: '/about',
    isLogged: false
  },
  {
    name: 'Support',
    path: '/support'
  }
]
</script>

<template>
  <nav class="nav align-items-baseline">
    <RouterLink to="/" class="navbar-brand">
      <img
        src="https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
        alt="Steam logo"
      />
    </RouterLink>
    <template v-for="{ name, path, isLogged } in navigator" :key="name">
      <RouterLink :to="path" v-if="isLogged === undefined || isLogged === Boolean(user)">
        {{ name }}
      </RouterLink>
    </template>
  </nav>
</template>

<style scoped>
nav {
  font-weight: 500;
  gap: 1rem;

  a {
    display: block;
    text-transform: uppercase;
    text-decoration: none;
    color: #dcdedf;
    font-size: 1.1rem;
    padding: 1rem 0 0;

    &:hover {
      color: white;
    }

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
</style>
