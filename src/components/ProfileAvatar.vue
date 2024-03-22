<script setup lang="ts">
import { user } from '@/common/utils'
defineProps({
  size: {
    type: String,
    default: '50px'
  },
  showFrame: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="profile-avatar" :style="{ width: size, height: size }">
    <img v-if="showFrame" :src="user?.frame" alt="avatar frame" class="img-frame" />
    <img :src="user?.avatar" alt="avatar" class="img-avatar" />
  </div>
</template>

<style scoped lang="scss">
.profile-avatar {
  position: relative;
  .img-avatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-frame {
    position: absolute;
    top: -5px;
    left: -5px;
    width: 120%;
    height: 120%;
    object-fit: cover;
  }
}
</style>
@/common/utils
