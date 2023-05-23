<template>
  <header class="header">
    <v-container>
      <div class="header-row">
        <img src="@/assets/logo.png" alt="Fastoo" class="header-logo" />

        <div class="header-menu" :class="{ opened: menuOpened }">
          <template v-for="{ path, title, children } of menu" :key="title">
            <router-link :to="{ path }" class="header-menu__link" v-if="!Boolean(children)">
              {{ title }}
            </router-link>
            <div class="header-menu__link" v-if="Boolean(children)">
              <span class="header-menu__link-label" @click="setActiveDropdownId(title)">
                {{ title }} <img src="@/assets/icons/angle-down_i.svg" alt="" />
              </span>
              <div class="header-menu__dropdown" :class="{ opened: activeDropdownId === title }">
                <router-link
                  v-for="child of children"
                  :key="child.title"
                  :to="{ path: child.path }"
                  class="header-menu__dropdown-item"
                >
                  {{ child.title }}
                </router-link>
              </div>
            </div>
          </template>
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
          <account-button />
        </div>
      </div>
    </v-container>
  </header>
</template>

<script>
import VContainer from '../Container/VContainer.vue';
import AccountButton from '@/modules/AccountButton/AccountButton.vue';
import { isTouchableDevice, isMobile } from '@/app/media-query/media-query';
import { pathes, menu } from '@/app/router';

export default {
  setup() {
    return { pathes, menu, isMobile };
  },

  components: {
    AccountButton,
    VContainer,
  },

  data() {
    return {
      activeDropdownId: '',
      menuOpened: false,
    };
  },

  methods: {
    setActiveDropdownId(id) {
      if (!isTouchableDevice()) {
        return;
      }

      if (this.activeDropdownId === id) {
        this.activeDropdownId = '';
      } else {
        this.activeDropdownId = id;
      }
    },
    toggleMenuOpened() {
      this.menuOpened = !this.menuOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './header.scss';
</style>
