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
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-image: url(https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg);

  .login-wrapper {
    background-color: #181a21;
    width: 35vw;
    margin: 0 auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;

    form {
      flex: 3 1 0;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 0.25rem;

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
        color: gray;

        &:first-child {
          color: #1a9fff;
        }
      }

      button {
        width: 60%;
        padding: 1rem;
        background: linear-gradient(90deg, #06bfff 0%, #2d73ff 100%);
        border-radius: 2px;
        color: white;
        border: none;
        align-self: center;
        text-transform: capitalize;
        font-size: 1.1rem;
        margin: 1rem 0;
      }
    }

    .login-qr {
      flex: 1 1 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border-radius: 1rem;
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
