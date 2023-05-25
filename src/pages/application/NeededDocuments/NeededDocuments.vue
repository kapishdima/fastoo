<template>
  <v-page classes="needed-documents-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Account" />

    <section class="section-documents">
      <div class="section-decoration"></div>
      <div class="section-documents__title heading-2">Documents which you have to provide</div>
      <div class="documents-container">
        <div class="document-item">
          <a href="#" class="document-link">List of documents for merchants_Eng_Rus.pdf</a>
          <div class="document-actions">
            <div class="document-actions__item">To download</div>
            <div class="document-actions__item">To review</div>
          </div>
        </div>
        <div class="document-item">
          <a href="#" class="document-link">KYC Questionnaire_New Payment System.pdf</a>
          <div class="document-actions">
            <div class="document-actions__item">To download</div>
            <div class="document-actions__item">To review</div>
          </div>
        </div>
        <div class="document-item">
          <a href="#" class="document-link"
            >Ownership_Structure_if_there_is_one_UBO_in_the_ownership_structure.docx</a
          >
          <div class="document-actions">
            <div class="document-actions__item">To download</div>
            <div class="document-actions__item">To review</div>
          </div>
        </div>
        <router-link class="button-link" :to="{ path: pathes.ACCOUNT_APPLICATION_FORM }">
          <v-button>Next step</v-button>
        </router-link>
      </div>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';
import VButton from '@/components/button/VButton.vue';

import { pathes } from '@/app/router';

export default {
  setup() {
    return { pathes };
  },
  components: {
    VPage,
    SectionBanner,
    VButton,
  },
};
</script>

<style lang="scss" scoped>
@import './needed-documents.scss';
</style>
