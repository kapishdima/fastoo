<template>
  <v-page classes="payments-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Payment Gateway" />
    <section class="section-row">
      <div class="section-content">
        <p class="paragraph--md">
          {{
            $t(
              'Fastoo payment technology is combination of numerous security features and handy tools that make payment acceptance beneficial and pleasant. Our elaborated payment gateway was developed by high-skilled team of web-developers, programmers and web-designers. We are constantly updating and upgrading our payment gateway allowing our clients to use only up-to-date product corresponding to the latest requirements and standards.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">
          {{
            $t(
              'Fastoo payment gateway has intuitive and convenient interface. We do all imaginable to guard our clients from different unpleasant issues. That is why our payment gateway is PCI DSS Level 1 compliant and includes all contemporary secure options. However Fastoo payment gateway is extremely secured, we managed to make it understandable and user-friendly allowing our merchants to enjoy security and spend time on business development. You can be sure that our safety features keep you away from all kinds of unapproved access.',
            )
          }}
        </p>
        <br />
        <img
          src="@/assets/illustrations/solutions/credit-card/illustation_2.svg"
          alt=""
          class="section-image"
        />
        <h3 class="heading-3 section-content__title">{{ $t('Advanced security features') }}</h3>

        <p class="paragraph--md">
          {{
            $t(
              'Fastoo payment gateway contemporary security features have been implemented to prevent any possibility of fraud actions. We do the utmost to protect our clients making our payment gateway utterly secured. Fastoo security department is permanently inventing and applying new technical tools that can decrease threat of damage caused by fraud. The whole team of programmers and managers is involved in this process because all participants of credit card processing scheme must obey security rules. This is the way how to make safety your friend and work without threat of damage.',
            )
          }}
        </p>
        <br />
        <p class="paragraph--md">{{ $t('List of our security features: *') }}</p>
        <br />

        <ul class="paragraph--md">
          <li>
            {{
              $t(
                'Fraud monitoring system. The mission of any fraud monitoring system is to prevent fraudulent activity before it happens. This system monitors merchant accounts for unusual or suspicious spending actions, and in case there is something irregular, the customer receives a phone call from one of our operator to be sure that transaction is veritable.',
              )
            }}
          </li>
          <li>
            {{
              $t(
                '3D secure. As soon as customer credit card passes 3-D secure verification, the merchant’s business becomes totally protected from any unapproved transactions or claims about unauthorized access.',
              )
            }}
          </li>
          <li>
            {{
              $t(
                '2 step authentication. The feature is additional step which has to be passed on the way of making a purchase. Usually a special code is sent via SMS on cardholder’s mobile phone which virtually reduces possibilities of fraud actions.',
              )
            }}
          </li>
          <li>
            {{
              $t(
                'Address Verification System (AVS). AVS compares the billing address provided by the cardholder with the address on file at the credit card company. Nowadays AVS is widely used in Georgia.',
              )
            }}
          </li>
          <li>
            {{
              $t(
                'IP geolocation. The system is able to compare location of cardholder with physical location of credit card. In case something is suspicious the owner receives a phone call for proving.',
              )
            }}
          </li>
          <li>
            {{
              $t(
                'Velocity monitoring. Velocity monitoring is a technique used in the banking industry to detect potential fraudulent use of a debit card by analyzing sudden and dramatic changes in debit card usage.',
              )
            }}
          </li>
        </ul>

        <p class="paragraph--md">
          {{ $t('* – this is not a full list of Fastoo security options') }}
        </p>
        <p class="paragraph--md">
          {{
            $t(
              'Discover the simplicity of payment process using Fastoo payment gateway and merchant account.',
            )
          }}
        </p>
      </div>
      <div class="section-sidebar">
        <navigation-card :list="navigationList" :active-index="3" />
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
