<script setup lang="ts">
import { login } from '@/common/utils'
import { lang } from '@/common/utils'
import loginQR from '@/assets/login.png'
</script>

<template>
  <div class="form-container">
    <div class="login-wrapper">
      <form class="login-form">
        <label for="username">{{ lang.login.username }}</label>
        <input type="text" id="username" name="username" />
        <label for="password">{{ lang.login.password }}</label>
        <input type="password" id="password" name="password" />
        <button type="submit" @click="login">{{ lang.login.button }}</button>
      </form>
      <div class="login-qr">
        <img :src="loginQR" alt="login qr code" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-container {
  background-color: #181a21;
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-image: url(https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg);

  .login-wrapper {
    background-color: #181a21;
    width: 30vw;
    margin: 0 auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 1rem;

    form {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.25rem;
      padding: 1rem;

      input {
        width: 100%;
        margin-bottom: 1rem;
        background-color: #e8f0fe;
        color: black;
        padding: 0.5rem;
        border: none;
      }

      label {
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: 500;

        &:first-child {
          color: #1a9fff;
        }
      }
    }

    .login-qr {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 1rem;
      width: 50%;
      padding: 1rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
