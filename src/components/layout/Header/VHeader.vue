<template>
  <header class="header">
    <img src="@/assets/logo.png" alt="Fastoo" class="header-logo" />

    <div class="header-menu">
      <div class="header-menu__link">Home</div>
      <div class="header-menu__link">Solutions</div>
      <div class="header-menu__link">Partners</div>
      <div class="header-menu__link">Knowledge Base</div>
      <div class="header-menu__link">About Us</div>
      <div class="header-menu__link">Contact Us</div>
      <div class="header-menu__link">Payment</div>
    </div>

    <v-button>Account</v-button>
  </header>
</template>

<script>
import { pathes } from '@/app/router';
import VButton from '@/components/button/VButton.vue';

export default {
  setup() {
    return { pathes };
  },

  components: {
    VButton,
  },
};
</script>

<style lang="scss" scoped>
@import './header.scss';
</style>
