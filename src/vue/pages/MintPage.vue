<template>
  <div class="mint-page">
    <Navbar class="mint-page__navbar"/>
    <h1 class="mint-page__title">
      Mint MLD Token
    </h1>
    <MintForm class="mint-page__form"/>
    <div class="mint-page__img-wrp">
      <img src="@static/images/stonks.png" class="mint-page__img" alt="stonks">
    </div>
  </div>
</template>

<script setup>

import Navbar from "@/vue/navigation/Navbar.vue";
import MintForm from "@/vue/forms/MintForm.vue";
</script>

<style lang="scss" scoped>
.mint-page {
  height: 100vh;
  z-index: 0;
  position: relative;
  background: black;
}
.mint-page__navbar {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    width: 445px;
    height: 445px;
    right: 0;
    top: -3rem;
    background: #1EAC66;
    filter: blur(23.2rem);
  }
}
.mint-page__title {
  color: white;
  margin: 5rem;
  font-size: 10rem;
}
.mint-page__form {
  margin-left: 5rem;
}
.mint-page__img-wrp {
  position: absolute;
  bottom: 1rem;
  right: 10rem;
  height: 60%;
}
.mint-page__img {
  height: 100%;
}
</style>
