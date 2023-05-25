<template>
  <v-page classes="complete-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Account" />

    <section class="section-complete">
      <div class="section-decoration"></div>
      <div class="section-complete__title heading-3">
        This page is unique and generated just for you
      </div>

      <div class="complete-container">
        <div class="document-loader">Documents are waiting to be loaded...</div>
        <div class="document-file">Doc 1 for registration on the site</div>
        <div class="add-document">
          Add new doc <img src="@/assets/icons/outline-circle-icon.svg" alt="" />
        </div>

        <v-button>Registration in a personal account, which will lead to another site</v-button>
      </div>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';
import VButton from '@/components/button/VButton.vue';

export default {
  components: {
    VPage,
    SectionBanner,
    VButton,
  },
};
</script>

<style lang="scss" scoped>
@import './complete.scss';
</style>
