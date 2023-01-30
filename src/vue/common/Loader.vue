<template>
  <div class="loader">
    <div class="loader__msg">
      {{ textHeader }}
    </div>
  </div>
</template>

<script setup>
import {useAccountStore} from "@/store/accountStore.ts";
import { chainId } from "@/ts/const/ethers.const.ts";

const accountStore = useAccountStore()

const textHeader = accountStore.actualChainId !== chainId
    ? 'Please change metamask network to Goerli'
    : 'Loading'

</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.loader {
  position: absolute;
  z-index: 11;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $loader-bg;
}

.loader__msg {
  color: $loader-text;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  font-size: 5rem;
}
</style>
