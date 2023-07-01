<template>
  <v-page classes="payments-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Multicurrency Processing" />
    <section class="section-row">
      <div class="section-content">
        <p class="paragraph--md">
          {{
            $t(
              'In the terms of nowaday world globalization merchants and their customers may be situated in different countries and even in different parts of the world. Certain time ago merchants were facing difficulties due to this fact, but today with Fastoo multicurrency processing solution it is not important whether you are working in Europe, Asia or Africa, America or Australia.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Merchants and their customers are getting closer thanks to our multicurrency processing. We maintain large list of supported processing currencies to ease the payment process and save money on conversion. Nevertheless, you can always accept payments in currencies that are now available for processing with clear and transparent conversion rate.',
            )
          }}
        </p>
        <br />
        <h3 class="heading-3 section-content__title">
          {{ $t('What benefits our merchants receive with multicurrency processing?') }}
        </h3>
        <img src="@/assets/illustrations/solutions/solution-1.jpg" alt="" class="section-image" />

        <p class="paragraph--md">
          {{
            $t(
              '  multicurrency processing solution is strong and profitable owing to close business relations with partners worldwide who are as dedicated to merchants needs as we are. Using the possibility to pay in own currency your customers are sure now that there are no secret charges or additional fees concerned with conversion. List of processing currencies: *',
            )
          }}
        </p>
        <br />
        <img src="@/assets/illustrations/solutions/solution-2.svg" alt="" class="section-image" />
        <p class="paragraph--md">
          {{ $t('* – processing currencies depend on payment solution') }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              '  developers have worked out an innovative option for international payments. This step forward brings convenience for all participants of transaction. As a result, payment process became faster and more efficient.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'The dynamic currency method permits transactions operation in a customers local currency without pulling the plug for merchants. So far, traders will still obtain settlement in their base currency.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Despite of the service’s distinctiveness, the security level keeps the same high quality. The additional function enhances the payment options alternatives for clients to chose from. Moreover, it will be a valuable tool to evolve and improve clients’ experience across the merchant’s website.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'This solution could be implemented by the company of any size, willing to endear consumers and to generate profit at the same time. Multicurrency method empowers merchants to offer an inconspicuous and simple surfing their websites for customers looking for simplicity to procure certain products or services.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Now traders are able to expand their portfolios, to discover new markets and to gain a winning position among rivals!',
            )
          }}
        </p>
        <br />
      </div>
      <div class="section-sidebar">
        <navigation-card :list="navigationList" :active-index="5" />
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
