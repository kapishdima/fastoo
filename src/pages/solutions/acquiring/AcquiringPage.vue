<template>
  <v-page classes="payments-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Internet Acquiring Solution" />
    <section class="section-row">
      <div class="section-content">
        <p class="paragraph--md">
          The main activity of Magua Pay processing company is providing of Internet acquiring
          services. Having a lot of successful experience in e-commerce sphere we provide worldwide
          Internet businesses with high-quality acquiring solutions. Experience of working with
          diverse industries allows us to elaborate optimal payment solutions which have already
          proved their success in practice. If you have a website and want to accept online payments
          through it, then our Internet acquiring solution is designed specially for you. We supply
          all necessary in order to let your business develop using fair rates and conquer leading
          positions in its area. We have highlighted 5 main features that help our merchants to
          succeed.
        </p>
        <br />
        <h3 class="heading-3 section-content__title">Advantages of Magua Pay Internet acquiring</h3>
        <img
          src="@/assets/illustrations/solutions/credit-card/illustation_2.png"
          alt=""
          class="section-image"
        />
        <h3 class="heading-3 section-content__title">
          The principle of Magua Pay Internet acquiring work
        </h3>
        <img
          src="@/assets/illustrations/solutions/credit-card/illustation_1.png"
          alt=""
          class="section-image"
        />
        <p class="paragraph--md">
          Customer makes a purchase at Merchant’s website. Coded information is momentarily
          transmitted on Magua Pay servers.
        </p>
        <br />
        <p class="paragraph--md">
          When our anti-fraud system approves transaction, the data is transferred to Acquiring bank
          and Merchant receives a notification of payment status. In case there is some kind of
          fraudulent activity the payment will be declined and the data will be added to our static
          blacklist after checking.
        </p>
        <br />
        <p class="paragraph--md">
          Acquiring bank receives payment information and initiates an inquiry to Issuing bank via
          International payment systems VISA and Mastercard.
        </p>
        <br />
        <p class="paragraph--md">
          Issuing bank either approves or declines the payment and informs both International
          payment system and Acquiring bank.
        </p>
        <br />
        <p class="paragraph--md">
          Magua Pay instantly receives Issuing bank response along with unique code for acceptation
          or declination of transaction.
        </p>
        <br />
        <p class="paragraph--md">Magua Pay notifies Merchant about payment status.</p>
        <p class="paragraph--md">Customer receives confirmation of successful payment.</p>

        <h3 class="heading-3 section-content__title">
          Industries for Magua Pay Internet acquiring
        </h3>

        <p class="paragraph--md">
          The complete list of industries, which are acceptable for our payment solutions, would
          occupy the whole page, which is why we picked out the main types of industries because
          many their representatives have chosen our Internet acquiring services. If you don’t see
          your type of business here please contact us and see what we can offer you. Also in order
          to save time and efforts you can read the article “How to apply for a merchant account”.
          It will help you to comprehend how the entire process looks like and how to speed it up.
        </p>
      </div>
      <div class="section-sidebar">
        <navigation-card :list="navigationList" :active-index="2" />
      </div>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';

import NavigationCard from '@/components/cards/NavigationCard.vue';

import { pathes } from '@/app/router';

export default {
  components: {
    VPage,
    SectionBanner,
    NavigationCard,
  },

  setup() {
    const navigationList = [
      { path: pathes.SOLUTION_PAYMENTS, label: 'Payment Solutions System from Magua Pay' },
      { path: pathes.SOLUTION_CREDIT_CARD, label: 'Credit Card Processing' },
      { path: pathes.SOLUTION_ACQUIRING, label: 'Internet Acquiring Solution' },
      { path: pathes.SOLUTION_PAYMENT_GATEWAY, label: 'Payment Gateway' },
      { path: pathes.SOLUTION_RECURRING_BILLING, label: 'Recurring Billing service' },
      { path: pathes.SOLUTION_MULTICURRENCY_PROCESSING, label: 'Multicurrency Processing' },
    ];

    return {
      navigationList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
