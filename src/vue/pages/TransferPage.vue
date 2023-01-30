<template>
  <div class="transfer-page">
  <Navbar class="transfer-page__navbar"/>
    <h1 class="transfer-page__title">
      Transfer MLD Token
    </h1>
    <TransferForm class="transfer-page__form"/>
    <div class="transfer-page__img-wrp">
      <img
          class="transfer-page__img transfer-page__first-img"
          src="@static/images/beer-man.png"
      >
      <img
          class="transfer-page__img"
          src="@static/images/beer-man.png"
      >
    </div>
  </div>
</template>

<script setup>

import Navbar from "@/vue/navigation/Navbar.vue";
import TransferForm from "@/vue/forms/TransferForm.vue";
</script>

<style lang="scss" scoped>
.transfer-page {
  background: black;
  height: 100vh;
  position: relative;
  z-index: 0;
}

.transfer-page__navbar {
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
.transfer-page__title {
  color: white;
  margin: 5rem;
  font-size: 10rem;
}
.transfer-page__form {
  margin-left: 5rem;
}
.transfer-page__img-wrp {
  position: absolute;
  bottom: 1rem;
  right: 0;
height: 45%;
}
.transfer-page__img {
  height: 100%;
}
.transfer-page__first-img {
  transform: scaleX(-1);
  margin-right: 10rem;
}
</style>
