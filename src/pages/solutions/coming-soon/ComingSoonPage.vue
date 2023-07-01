<template>
  <v-page classes="payments-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Coming Soon" />
    <section class="section-row">
      <div class="section-content">
        <h3 class="heading-3 section-content__title">
          {{ $t('Credit card') }}
        </h3>
        <img
          src="@/assets/illustrations/solutions/credit-card.png"
          alt=""
          class="section-illustration"
        />

        <p class="paragraph--md">
          {{
            $t(
              'Magua Pay is the company that successfully helps merchant from numerous types of business with credit card processing. All our clients are different. They have own style of work, however we provide payments solutions for everyone. Regardless of type of industry or size, each company is eager to receive first-rate credit card processing solution on fair conditions with all needful features and extremely high level of reliability. Very important thing is customer service because the best payment solution is solution offered opportunely.',
            )
          }}
        </p>

        <h3 class="heading-3 section-content__title">
          {{ $t('Digital card') }}
        </h3>

        <img
          src="@/assets/illustrations/solutions/digital-card.png"
          alt=""
          class="section-illustration"
        />
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Magua Pay is the company that successfully helps merchant from numerous types of business with credit card processing. All our clients are different. They have own style of work, however we provide payments solutions for everyone. Regardless of type of industry or size, each company is eager to receive first-rate credit card processing solution on fair conditions with all needful features and extremely high level of reliability. Very important thing is customer service because the best payment solution is solution offered opportunely.',
            )
          }}
        </p>
      </div>
      <div class="section-sidebar">
        <navigation-card :active-index="6" />
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
