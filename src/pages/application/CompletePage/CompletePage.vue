<template>
  <v-page classes="complete-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Account" />

    <section class="section-complete">
      <div class="section-decoration"></div>
      <div class="section-complete__title heading-3">
        {{ $t('This page is unique and generated just for you') }}
      </div>

      <div class="complete-container">
        <!-- <div class="document-loader">Documents are waiting to be loaded...</div> -->
        <div class="document-file" v-for="file of documents" :key="file.name">
          {{ file.name }} {{ $t('for registration on the site') }}
        </div>
        <label>
          <div class="add-document">
            {{ $t('Add new doc') }} <img src="@/assets/icons/outline-circle-icon.svg" alt="" />
            <input
              id="file-upload"
              type="file"
              multiple
              accept=".pdf,.docx,.doc"
              @change="applyFile"
              style="display: none"
            />
          </div>
        </label>

        <v-button @click="submitApplication">{{
          $t('Registration in a personal account, which will lead to another site')
        }}</v-button>
      </div>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';
import VButton from '@/components/button/VButton.vue';

import { sendApplication } from '@/api/application.api';

export default {
  components: {
    VPage,
    SectionBanner,
    VButton,
  },

  data() {
    return {
      documents: [],
    };
  },

  methods: {
    async submitApplication() {
      const applicationData = JSON.parse(window.localStorage.getItem('application_data') || '{}');
      const formData = new FormData();

      formData.append('documents', this.documents);

      await sendApplication({ ...applicationData, documents: formData });

      window.localStorage.removeItem('application_data');
      window.open('https://cabinet.billline.net/register/en/', '_blank');
    },
    applyFile(event) {
      this.documents = event.target.files;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './complete.scss';
</style>
