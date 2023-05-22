<template>
  <header class="header">
    <v-container>
      <div class="header-row">
        <img src="@/assets/logo.png" alt="Fastoo" class="header-logo" />

        <div class="header-menu" :class="{ opened: menuOpened }">
          <router-link :to="{ path: pathes.INDEX }" class="header-menu__link">Home</router-link>
          <div class="header-menu__link">Solutions</div>
          <router-link :to="{ path: pathes.PARTNERS }" class="header-menu__link"
            >Partners</router-link
          >
          <div class="header-menu__link">Knowledge Base</div>
          <router-link :to="{ path: pathes.ABOUT_US }" class="header-menu__link"
            >About Us</router-link
          >
          <router-link :to="{ path: pathes.CONTACTS }" class="header-menu__link"
            >Contact Us</router-link
          >
          <div class="header-menu__link">Payment</div>
        </div>

        <div class="header-end">
          <div
            class="header-menu__burger"
            :class="{ opened: menuOpened }"
            @click="toggleMenuOpened"
          >
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <v-button>Account</v-button>
        </div>
      </div>
    </v-container>
  </header>
</template>

<script>
import { pathes } from '@/app/router';
import VButton from '@/components/button/VButton.vue';
import VContainer from '../Container/VContainer.vue';

export default {
  setup() {
    return { pathes };
  },

  components: {
    VButton,
    VContainer,
  },

  data() {
    return {
      menuOpened: false,
    };
  },

  methods: {
    toggleMenuOpened() {
      this.menuOpened = !this.menuOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './header.scss';
</style>
