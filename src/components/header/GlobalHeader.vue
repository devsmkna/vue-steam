<script setup lang="ts">
import { user, login, lang, changeLanguage } from '@/common/utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faDownload, faUsers } from '@fortawesome/free-solid-svg-icons'
import ProfileHeader from '@/components/header/ProfileHeader.vue'
import ButtonHeader from '@/components/header/ButtonHeader.vue'
</script>

<template>
  <div class="nav-global">
    <ButtonHeader class="text-capitalize" :class="{ 'btn-cta': !user, 'btn-border': user }">
      <FontAwesomeIcon :icon="faDownload" />
      {{ lang.global.install }}
    </ButtonHeader>

    <div v-if="!user">
      <ButtonHeader @click="login"> {{ lang.global.login }} </ButtonHeader>
      |
      <ButtonHeader class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        {{ lang.global.language }}
        <ul class="dropdown-menu">
          <li v-for="(code, name) in lang.languages" :key="name">
            <a href="#" class="dropdown-item text-capitalize" @click="changeLanguage(code)">
              {{ name }}
            </a>
          </li>
        </ul>
      </ButtonHeader>
    </div>

    <ButtonHeader v-if="user" class="btn-border" :class="{ 'btn-cta': user }">
      <FontAwesomeIcon :icon="faUsers" />
    </ButtonHeader>
    <ButtonHeader v-if="user" class="btn-border">
      <FontAwesomeIcon :icon="faBell" />
    </ButtonHeader>
    <ProfileHeader v-if="user && user" :user="user" />
  </div>
</template>

<style scoped lang="scss">
.nav-global {
  position: absolute;
  top: 0.5rem;
  bottom: auto;
  left: auto;
  right: calc(calc(100vw - var(--max-width)) / 2);
  z-index: 101;
  display: flex;
  align-items: start;
  align-self: end;
  line-height: 0.5rem;
}

.btn {
  padding: 0.2rem 0.6rem;
  margin: 0 0.2rem;
  border-radius: 0;
  text-transform: lowercase;
  font-size: 0.75rem;

  svg {
    font-size: 0.9rem;

    path {
      fill: white;
    }
  }
}

.btn-border {
  background-color: #3d4450;
}

.btn-cta {
  background-color: #5c7e10;
  color: white;
}
</style>
@/common/utils
