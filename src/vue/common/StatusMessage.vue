<template>
  <div
      class="status-message"
      :class="`status-message--${accountStore.popup.statusPopup}`"
  >
    <div class="status-message__header">
      {{accountStore.popup.statusPopup}}
    </div>
    <div
        v-if="accountStore.popup.msgPopup"
        class="status-message__body"
    >
      {{message}}
    </div>
    <app-button
        @click="accountStore.popup.isPopup=false"
        text="x"
        class="status-message__close-btn"
    />
  </div>
</template>

<script setup>

import { ref } from "vue";
import {useAccountStore} from "@/store/accountStore.ts";
import AppButton from "@/vue/common/AppButton.vue";

const accountStore = useAccountStore()
const message = accountStore.popup.msgPopup.slice(0,100)
const notificationError = {
  error: 'error',
  warning: 'warning',
  success: 'success'
}



</script>

<style lang="scss" scoped>

  .status-message {
    position: absolute;
    z-index: 10;
    top: 5rem;
    right: 10rem;
    border-radius: 1rem;
    padding: 2rem 7rem 2rem 1.5rem;
    font-size: 2rem;
    background: white;
  }

  .status-message--error {
    border-left: 1rem #f18080 solid;
  }

  .status-message--success {
    border-left: 1rem #95f180 solid;
  }

  .status-message--warning {
    border-left: 1rem #f1da80 solid;
  }

  .status-message__header {
    text-transform: capitalize;
  }

  .status-message__body {
    font-size: 1.4rem;
    border-radius: 2rem;
    width: 100%;
  }

  .status-message__close-btn {
    position: absolute;
    top: 0;
    right: 0;
  }

</style>
