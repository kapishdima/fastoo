<template>
  <v-page classes="needed-documents-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Account" />

    <section class="section-documents">
      <div class="section-decoration"></div>
      <div class="section-documents__title heading-2">
        {{ $t('Documents which you have to provide') }}
      </div>
      <div class="documents-container">
        <div class="document-item">
          <img src="@/assets/document-icon.svg" alt="" />
          <a
            :href="document1"
            download="List of documents for merchants_Eng_Rus.pdf"
            class="document-link"
            >List of documents for merchants.pdf</a
          >
          <!-- <div class="document-actions">
            <a
              :href="document1"
              download="List of documents for merchants_Eng_Rus.pdf"
              class="document-actions__item"
              >To download</a
            >
            <div class="document-actions__item">To review</div>
          </div> -->
        </div>
        <div class="document-item">
          <img src="@/assets/document-icon.svg" alt="" />
          <a
            :href="document2"
            download="KYC Questionnaire_New Payment System.pdf"
            class="document-link"
            >KYC Questionnaire.pdf</a
          >
          <!-- <div class="document-actions">
            <a
              :href="document2"
              download="KYC Questionnaire_New Payment System.pdf"
              class="document-actions__item"
              >To download</a
            >

            <div class="document-actions__item">To review</div>
          </div> -->
        </div>
        <div class="document-item">
          <img src="@/assets/document-icon.svg" alt="" />
          <a
            :href="document3"
            download="Ownership_Structure_if_there_is_one_UBO_in_the_ownership_structure.docx"
            class="document-link"
            >Ownership Structure.docx</a
          >
          <!-- <div class="document-actions">
            <a
              :href="document3"
              download="Ownership_Structure_if_there_is_one_UBO_in_the_ownership_structure.docx"
              class="document-actions__item"
              >To download</a
            >

            <div class="document-actions__item">To review</div>
          </div> -->
        </div>
        <router-link class="button-link" :to="{ path: pathes.ACCOUNT_APPLICATION_FORM }">
          <v-button>{{ $t('Next step') }}</v-button>
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

import document1 from '@/assets/documents/List of documents for merchants_Eng_Rus.pdf';
import document2 from '@/assets/documents/KYC Questionnaire_New Payment System.pdf';
import document3 from '@/assets/documents/Ownership_Structure_if_there_is_one_UBO_in_the_ownership_structure.docx';

export default {
  setup() {
    return { pathes, document1, document2, document3 };
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
