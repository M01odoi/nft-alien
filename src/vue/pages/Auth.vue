<template>
  <div class="auth">
    <Logo class="auth__logo"/>
    <h1 class="auth__title">First of all, you need to connect <span class="auth__title--orange">MetaMask</span></h1>
    <div class="auth__btns">
    <app-button
        v-if="isMetamaskSupported"
        @click="connectWallet"
        text="Connect with MetaMask"
        scheme="primary"
    />
      <app-button
          v-else
          href="https://metamask.io/download/"
          text="Install MetaMask"
          scheme="primary"
      />
    </div>
    <div class="auth__images">
      <img src="@static/images/auth-alien-yellow.png" alt="alien" class="auth__images-first">
      <img src="@static/images/auth-alien-gray.png" alt="alien" class="auth__images-second">
    </div>
  </div>
</template>

<script setup>
import {useAccountStore} from "@/store/accountStore.ts";
import Logo from "@/vue/assets/Logo.vue";
import AppButton from "@/vue/common/AppButton.vue";
import {onMounted, ref} from "vue";
import { ethers } from "ethers";
import {router} from "@/router/index.ts";
import {ROUTE_NAMES} from "@/enums/index.ts";

const accountStore = useAccountStore()
const isMetamaskSupported = ref(false)

onMounted(()=>{
  isMetamaskSupported.value = typeof window.ethereum !== 'undefined'
})
const installMetamask = () => {

}
async function connectWallet () {
    await accountStore.connectWallet()
    await router.push({name: ROUTE_NAMES.home})
}

</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  background: black;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 445px;
    height: 445px;
    right: 0;
    top: -3rem;
    background: #1EAC66;
    filter: blur(23.2rem);
  }
}
.auth__logo {
  display: flex;
  justify-content: center;
  margin: 5rem 0;
}
.auth__form {
  margin-left: 5rem;
}
.auth__title {
  position: relative;
  text-transform: initial;
  width: 50%;
  font-size: 8rem;
  margin-bottom: 2rem;
  color: white;
  text-align: center;
}
.auth__title--orange {
  color: orange;
}

.auth__btns {
  width: 50%;
  display: flex;
  justify-content: center;
}
.auth__change-form {
  width: max-content;
  margin-bottom: 2rem;
  color: #1EAC66;
  border-bottom: 2px solid #1EAC66;
  font-size: 2rem;
  cursor: pointer;
}
.auth__images {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 88rem;
  display: flex;
  align-items: end;
  flex-wrap: nowrap;
}
.auth__images-first {
  position: relative;
  z-index: 2;
}
.auth__images-second {
  position: relative;
  right: 20rem;
  z-index: 1;
}
</style>
