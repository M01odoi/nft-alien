<template>
  <router-link
      v-if="route"
      :class="`app-button--${this.scheme}`"
      class="app-button"
      :to="route"
  >
    <img
        v-if="icon"
        class="app-button--icon"
        src="@static/branding/wallet.svg"
        alt="wallet"
    >
    {{ text }}
  </router-link>
  <a
      v-else-if="href"
      :href="href"
      target="_blank"
      :class="`app-button--${this.scheme}`"
      class="app-button"
  >
    <img
        v-if="icon"
        class="app-button--icon"
        src="@static/branding/wallet.svg"
        alt="wallet"
    >
    {{ text }}
  </a>
  <button
      v-else
      :class="`app-button--${this.scheme}`"
      class="app-button"
  >
    <img
        v-if="icon"
        class="app-button--icon"
        src="@static/branding/wallet.svg"
        alt="wallet"
    >
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  scheme: {
    type: String
  },
  icon: {
    type: String,
  },
  route: {
    type: String,
  },
  href: {
    type: String,
  }
})
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.app-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 500;
  background-color: transparent;
  width: max-content;
  height: max-content;
  padding: 0.8rem 2.2rem;
  border-radius: 0.1rem;
  border: none;
  transition: all 0.3s;
  text-decoration: none;
  cursor: pointer;
}

.app-button--primary {
  color: $app-button-primary;
  background-color: $app-button-primary-bg;
}

.app-button--secondary {
  color: $app-button-secondary;
  border: 0.2rem solid $app-button-secondary-border;
}

.app-button--icon {
  margin-right: 1rem;
}
</style>
