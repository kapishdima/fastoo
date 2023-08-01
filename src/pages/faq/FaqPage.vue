<template>
  <v-page classes="faq-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="F.A.Q." />
    <h3 class="faq-page__title heading-3">
      {{ $t('Here is the list of the most frequently asked questions') }}
    </h3>
    <faq-list />
    <section class="section-contact">
      <div class="section-decoration"></div>
      <h3 class="heading-3 section-contact__title">{{ $t('Do you have any questions') }}</h3>

      <contact-form />
    </section>
  </v-page>
</template>

<script>
import ContactForm from '@/components/form/ContactForm/ContactForm.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';
import VPage from '@/components/layout/Page/VPage.vue';
import FaqList from '@/modules/Faq/FaqList.vue';

export default {
  components: {
    VPage,
    SectionBanner,
    FaqList,
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
@import './faq.scss';
</style>
