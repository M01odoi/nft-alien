<template>
  <nav class="navbar">
    <Logo/>
    <ul class="navbar__list">
      <li
          @click="router.push({name: ROUTE_NAMES.home})"
          class="navbar__list-item"
      >
        Home
      </li>
      <li
          @click="router.push({name: ROUTE_NAMES.mint})"
          class="navbar__list-item"
      >
        Mint
      </li>
      <li
          @click="router.push({name: ROUTE_NAMES.transfer})"
          class="navbar__list-item">
        Transfer
      </li>
      <li
          @click="copyAddress"
          class="navbar__list-item navbar__address"
      >
        Address: {{ accountStore.address.slice(0, 2) + '...' + accountStore.address.slice(-5) }}
        <span
            v-if="isClickCopyBtn"
            class="navbar__address-copy"
        >
          Copied!
        </span>
      </li>
    </ul>
    <div class="navbar__address">
      {{ accountStore.balance }} {{ accountStore.symbolToken }}
    </div>
  </nav>
</template>

<script setup>
import Logo from "../assets/Logo.vue";
import { useAccountStore } from "@/store/accountStore.ts";
import { ref } from "vue";
import { router } from "@/router/index.ts";
import { ROUTE_NAMES } from "@/enums/index.ts";

const accountStore = useAccountStore()

let isClickCopyBtn = ref(false)

const copyAddress = async () => {
  isClickCopyBtn.value = true
  await navigator.clipboard.writeText(accountStore.address);
  setTimeout(() => {
    isClickCopyBtn.value = false
  }, 2000)

}
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';

.navbar {
  width: 100%;
  color: $navbar-color;
  background: $navbar-bg;
  padding: 1.4rem 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__list {
  list-style-type: none;
  display: flex;
  margin: 0 2rem;
}

.navbar__list-item {
  font-size: 1.6rem;
  margin-right: 7vw;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
}

.navbar__address {
  font-size: 1.6rem;
  white-space: nowrap;
  width: 17rem;
  position: relative;
}

.navbar__address-copy {
  position: absolute;
  z-index: 1;
  top: 3rem;
  left: 4rem;
  background: white;
  color: black;
  border-radius: 4rem;
  padding: 0.5rem 1rem;

  &::after {
    content: '';
    z-index: -1;
    width: 2rem;
    height: 2rem;
    position: absolute;
    bottom: 1.6rem;
    left: 2.5rem;
    background: #ffffff;
    rotate: 45deg;
  }
}

</style>
