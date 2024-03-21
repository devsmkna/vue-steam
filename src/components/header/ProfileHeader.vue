<script setup lang="ts">
import { user, logout } from '@/utils'
import { RouterLink } from 'vue-router'
import ButtonHeader from '@/components/header/ButtonHeader.vue'
import ProfileAvatar from '@/components/ProfileAvatar.vue'
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
          <RouterLink to="/" class="dropdown-item text-capitalize" @click="logout"
            >Logout</RouterLink
          >
        </li>
      </ul>
    </ButtonHeader>

    <ButtonHeader v-if="user">
      {{ user.wallet + ' ' + user.currency }}
    </ButtonHeader>
  </div>
  <RouterLink to="/profile">
    <ProfileAvatar size="35px" :showFrame="true" />
  </RouterLink>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-flow: column nowrap;
  align-items: end;
}

.btn {
  padding: 0.1rem 0.8rem;
  margin: 0 0.2rem;
  border-radius: 0;
  text-transform: lowercase;
  font-size: 0.75rem;
  line-height: 0.9rem;
}
</style>
