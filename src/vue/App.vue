<script setup lang="ts">
import StatusMessage from "@/vue/common/StatusMessage.vue";
import Loader from "@/vue/common/Loader.vue";
import { useAccountStore } from "@/store/accountStore";

const accountStore = useAccountStore()
accountStore.init()
</script>

<template>
  <router-view/>
  <Loader v-if="accountStore.isLoading"/>
  <status-message v-if="accountStore.popup.isPopup"/>
</template>
