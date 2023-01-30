<template>
  <router-link :to="{ name: ROUTE_NAMES.home }">
    <div class="logo">
      <img src="@static/branding/logo.svg" alt="photo">
      <h1 class="logo__name">NFTALIEN</h1>
    </div>
  </router-link>
</template>

<script setup>
import { ROUTE_NAMES } from '@/enums'
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo__name {
  padding-left: 1.6rem;
  font-size: 3.2rem;
}
</style>
