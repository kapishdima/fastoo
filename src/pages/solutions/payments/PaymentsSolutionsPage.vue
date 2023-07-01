<template>
  <v-page classes="payments-page">
    <section-banner
      :bg="require('@/assets/section-bg.png')"
      title="Payment Solutions System from Fastoo"
    />
    <section class="section-row">
      <div class="section-content">
        <p class="paragraph--md">
          {{
            $t(
              "Fastoo payment solution is all-in-one technical and financial solution created to fulfill various merchant's needs. Secure, easy-to-use, reliable on the one hand; beneficial and trustworthy on the other. To accept payments in the terms of Fastoo payment solutions means to work with the best possible pricing and being supported by first-class payment technology.",
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Fastoo works both with startups and experienced companies. The big part of our best merchants were startups when they firstly applied for our payment solution. Competent approach along with stimulative conditions from our side gave these companies possibility to focus on their business goals and achieve them one after another. We are very proud of our merchants and we proceed growing together by supporting each other.',
            )
          }}
        </p>
        <h3 class="heading-3 section-content__title">{{ $t('How it works') }}</h3>
        <p class="paragraph--md">
          {{
            $t(
              'Fair pricing - You will not ever find any slippery formulations or hidden fees in the terms of our payment solutions.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Easy and fast integration - Full support on every stage of integration makes the whole process quick and smooth.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Timely payouts - Be sure that you will receive your money exactly on time without any delays from our side.',
            )
          }}
        </p>

        <h3 class="heading-3 section-content__title">
          {{ $t('Chief features of Fastoo payment solution') }}
        </h3>

        <p class="paragraph--md">
          {{
            $t(
              'PCI DSS Level 1 - The highest security level excludes even a hint of unauthorized actions or other fraudulent activity. Payments are processed securely with Fastoo.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Advanced back-office - Armed with multitude of useful features you will be able to put your business on previously unimaginable heights.',
            )
          }}
        </p>
      </div>
      <div class="section-sidebar">
        <navigation-card :list="navigationList" :active-index="0" />
      </div>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';

import NavigationCard from '@/components/cards/NavigationCard.vue';

export default {
  components: {
    VPage,
    SectionBanner,
    NavigationCard,
  },
};
</script>

<style lang="scss" scoped></style>
