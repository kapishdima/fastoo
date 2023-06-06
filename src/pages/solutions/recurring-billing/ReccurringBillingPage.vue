<template>
  <v-page classes="payments-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Recurring Billing service" />
    <section class="section-row">
      <div class="section-content">
        <p class="paragraph--md">
          {{
            $t(
              'With enabled Fastoo recurring billing option merchants receive recurring payments through their websites from customers on permanent base. Once customer agrees with the billing option, you start to receive payments automatically. Due to your terms and conditions client is able to opt out from using the service. Recurring billing option is beneficial and simple service, which allows merchants to regularly charge patrons and save the time and efforts.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'In case you sell products and services on a recurring payments basis you can seriously ease and protect your business. RegularPay automatic recurring billing service drastically decreases your efforts spent on processing of customers’ payments allowing your clients to simply type their card details once, thereby agree that all following payments will be took out from their accounts at a certain time.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Moreover, using this recurring billing service you can be sure that all due payments will be passed on time, hence there is no need to remind your clients about terms of payments. You will not miss any payment while working with RegularPay.',
            )
          }}
        </p>
        <br />
        <h3 class="heading-3 section-content__title">
          {{ $t('Fastoo recurring billing features') }}
        </h3>
        <img
          src="@/assets/illustrations/solutions/credit-card/illustation_2.png"
          alt=""
          class="section-image"
        />

        <p class="paragraph--md">
          {{
            $t(
              'If your business maintains continual subscriptions, Fastoo recurring billing system is what you are looking for. This system is very easy-to-integrate and it saves your time and spending costs. In addition to the fact that your customers do not need to enter credit card data details again and again, recurring payments have lesser risk level because they have already been monitored by our anti-fraud system.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Also we took care that our merchants get the highest approval ratio by adjusting Fastoo billing system to peculiarities of different merchants’ businesses. Individual approach along with advanced technical features allow every merchant to successfully work with Fastoo payment solutions.',
            )
          }}
        </p>
        <br />
        <h3 class="heading-3 section-content__title">
          {{ $t('Industries that profit from Fastoo recurring billing option') }}
        </h3>

        <ul class="paragraph--md">
          <li>{{ $t('Mobile Gaming') }}</li>
          <li>{{ $t('Lottery') }}</li>
          <li>{{ $t('Gaming') }}</li>
          <li>{{ $t('E-commerce') }}</li>
        </ul>
      </div>
      <div class="section-sidebar">
        <navigation-card :list="navigationList" :active-index="4" />
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
