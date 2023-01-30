<template>
<div class="home">
  <Navbar class="home-page__navbar"/>
  <div class="home-page__wrapper-img">
    <img src="@static/images/home-aliens.png" alt="" class="home-page__img">
  </div>
  <div class="home-page__header">
    <h1 class="home-page__title">
      explore nft collection
    </h1>
    <p class="home-page__desc">
      A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique,
      metaverse-ready, and designed to benefit their holders.
    </p>
  </div>
</div>
</template>

<script setup>
import Navbar from "@/vue/navigation/Navbar.vue";
import AppButton from "@/vue/common/AppButton.vue";
import {useAccountStore} from "@/store/accountStore.ts";
import InputField from "@/vue/fields/InputField.vue";
import {ref} from "vue";
const accountStore = useAccountStore()

const address = ref('')
</script>

<style lang="scss" scoped>
.home{
  background: black;
  width: 100%;
  height: 100vh;
}
.home-page__navbar {
  position: relative;
  z-index: 1;
}
.home-page__wrapper-img {
  &:after {
    content: '';
    position: absolute;
    z-index: 0;
    width: 600px;
    height: 120px;
    left: 0;
    top: 0;
    background: #2d8c76;
    filter: blur(13rem);
  }
}
.home-page__img {
  width: 100vw;
}
.home-page__header {
  margin: -20rem auto 0;
  width: 88.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 3;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 88.5rem;
    height: 220px;
    left: 0;
    top: -5rem;
    background: black;
    filter: blur(7rem);
  }
}
.home-page__title {
  color: white;
  font-size: 7.2rem;
  display: flex;
  justify-content: center;
}
.home-page__desc {
  color: white;
  font-size: 2rem;
  width: 75rem;
  text-align: center;
}
</style>
