<template>
  <v-page classes="glossary-page">
    <section-banner :bg="require('@/assets/glossary-bg.png')" title="Glossary" :reverse="true" />

    <div class="glossary-row">
      <div class="glossary-container">
        <p class="paragraph">
          <b>2-step authentication</b> – is an optional security feature involving two stages to
          verify the identity of an entity trying to access services in a computer or in a network.
          This is a special case of a multi-factor authentication which might involve only one of
          the three authentication factors (a knowledge factor, a possession factor, and an
          inherence factor) for both steps.
        </p>

        <br />
        <p class="paragraph">
          <b>3D secure</b> – is a protocol designed to be an additional security layer for online
          credit and debit card transactions. Developed by Visa and licensed by MasterCard, 3D
          Secure stands for “Three Domain Secure” – the domains being the acquiring bank (retailer’s
          bank), the issuing bank (the cardholder’s bank) and the infrastructure that supports the
          3D Secure protocol.
        </p>
        <br />
        <template v-for="[letter, terms] of Object.entries(glossary)" :key="letter">
          <h5 class="glossary-letter">{{ letter }}</h5>
          <br />
          <template v-for="term of terms" :key="term">
            <p class="paragraph" v-html="term"></p>
            <br />
          </template>
        </template>

        <p class="paragraph">
          Please also check our Articles section to understand Fastoo payment solution better. For
          more information please contact us.
        </p>
      </div>
    </div>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';
import glossary from './glossary.json';

export default {
  setup() {
    return {
      glossary,
    };
  },
  components: {
    VPage,
    SectionBanner,
  },
};
</script>

<style lang="scss" scoped>
@import './glossary.scss';
</style>
