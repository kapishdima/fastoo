<template>
  <v-page classes="sign-up-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Account" />
    <section class="section-sign-up">
      <div class="section-decoration"></div>
      <div class="section-sign-up__title heading-2">{{ $t('Sign up') }}</div>
      <interactions-list />
      <router-link class="button-link" :to="{ path: pathes.ACCOUNT_NEEDED_DOCUMENTS }">
        <v-button>Get started</v-button>
      </router-link>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import VButton from '@/components/button/VButton.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';
import InteractionsList from '@/modules/InteractionsList/InteractionsList.vue';

import { pathes } from '@/app/router';

export default {
  setup() {
    return { pathes };
  },
  components: {
    VPage,
    VButton,
    SectionBanner,
    InteractionsList,
  },
};
</script>

<style lang="scss" scoped>
@import './sign-up.scss';
</style>
