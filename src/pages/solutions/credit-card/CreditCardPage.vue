<template>
  <v-page classes="payments-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Credit Card Processing" />
    <section class="section-row">
      <div class="section-content">
        <p class="paragraph--md">
          Fastoo is the company that successfully helps merchant from numerous types of business
          with credit card processing. All our clients are different. They have own style of work,
          however we provide payments solutions for everyone. Regardless of type of industry or
          size, each company is eager to receive first-rate credit card processing solution on fair
          conditions with all needful features and extremely high level of reliability. Very
          important thing is customer service because the best payment solution is solution offered
          opportunely.
        </p>
        <br />
        <p class="paragraph--md">
          That is why Fastoo credit card processing is multifunctional all-in-one solution merchants
          are looking for. Our dedicated managers are always ready to offer you the best possible
          credit card processing and you can be sure that the whole process will pass quickly and
          smoothly. Your optimal payment solution is closer than you think. The search for better
          payment solution ends here as more than 50% of our merchants switched to us from other
          providers. They have already found optimal solution for credit card processing, why don’t
          you do the same?
        </p>
        <h3 class="heading-3 section-content__title">Credit card processing chart</h3>
        <img
          src="@/assets/illustrations/solutions/credit-card/illustation_1.png"
          alt=""
          class="section-image"
        />
        <p class="paragraph--md">
          Customer makes a purchase at Merchant’s webstore. The transaction information is
          momentarily transferred to Fastoo servers by force of different payment page features.
        </p>
        <br />
        <p class="paragraph--md">
          The payment data is checked by Fastoo fraud monitoring system and if only there are no
          suspicious actions it is sent to the trusted acquiring bank. Merchant receives immediate
          notice about passed transaction. In case our anti-fraud system reveals an unapproved
          attempt it blacklists this fraudulent user.
        </p>
        <br />
        <p class="paragraph--md">
          Acquiring Bank receives transaction information from our side and makes a request to
          Issuing Bank via International Payment System (VISA, MasterCard etc.)
        </p>
        <br />
        <p class="paragraph--md">
          Issuing Bank approves or declines the payment and informs both International Payment
          System and Acquiring Bank about that.
        </p>
        <br />
        <p class="paragraph--md">
          Fastoo receives the Issuing Bank reply with corresponding approval or denial code.
        </p>
        <br />
        <p class="paragraph--md">
          Fastoo processes the reply from Acquiring Bank and notifies Merchant that transaction has
          passed.
        </p>

        <p class="paragraph--md">
          Customer sees an information on the monitor that purchase has been successfully made.
        </p>

        <h3 class="heading-3 section-content__title">
          Advantages of Fastoo credit card processing
        </h3>

        <p class="paragraph--md">
          United together security, convenience and reliability are qualities that form Fastoo
          credit card processing making it universal for merchants from all around the world. We
          believe that every client is unique one, which is why our credit card processing solution
          is flexible enough to meet all merchants’ needs. We strictly adhere to the attitude that
          our merchants deserve to feel every single day that they are being processed by the best
          company in the sphere of credit card processing. 5 following advantages clearly show how
          do we achieve this goal.
        </p>
        <img
          src="@/assets/illustrations/solutions/credit-card/illustation_2.png"
          alt=""
          class="section-image"
        />
      </div>
      <div class="section-sidebar">
        <navigation-card :list="navigationList" :active-index="1" />
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
      { path: pathes.SOLUTION_PAYMENTS, label: 'Payment Solutions System from Fastoo' },
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
