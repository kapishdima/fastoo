<template>
  <footer>
    <v-container classes="footer">
      <div class="footer-text">
        <h2 class="heading-2">{{ $t('New Payment System LLC') }}</h2>
        <p class="paragraph-footer">
          {{
            $t(
              'If you are reading this, then you are looking for more profitable and stable solution! Receive our offer and solve the payment solution issue once and for all!',
            )
          }}
        </p>
      </div>
      <div class="footer-item">
        <h4 class="footer-item__title">{{ $t('Contact') }}</h4>
        <div class="footer-contact" v-for="contact of contacts" :key="contact.title">
          <img :src="contact.icon" alt="" class="footer-contact__icon" />

          <div class="footer-contact__info">
            <h6 class="footer-contact__title paragraph">{{ $t(contact.title) }}</h6>
            <span class="footer-contact__value subtitle" v-html="contact.value"></span>
          </div>
        </div>
      </div>
      <div class="footer-item">
        <h4 class="footer-item__title">{{ $t('Solutions') }}</h4>
        <router-link
          class="footer-link subtitle"
          v-for="link of solutionLinks"
          :key="link"
          :to="{ path: link.path }"
        >
          {{ $t(link.label) }}
        </router-link>
      </div>
      <div class="footer-item">
        <h4 class="footer-item__title">{{ $t('Support') }}</h4>
        <router-link
          class="footer-link subtitle"
          v-for="link of supportLinks"
          :key="link"
          :to="{ path: link.path }"
        >
          {{ $t(link.label) }}
        </router-link>
      </div>
    </v-container>
    <div class="copyright">
      {{ $t('Copyright 2023 New Payment System LLC. All Rights Reserved') }}
    </div>
  </footer>
</template>

<script>
import VContainer from '../Container/VContainer.vue';
import { pathes } from '@/app/router';

export default {
  components: {
    VContainer,
  },
  setup() {
    const contacts = [
      {
        icon: require('@/assets/icons/i_phone.svg'),
        title: 'Phone',
        value:
          '<a href="tel:+995 591 06 55 93" style="color: inherit; text-decoration: none;">+995 591 06 55 93</a>',
      },
      {
        icon: require('@/assets/icons/i_mail.svg'),
        title: 'Email',
        value:
          '<a href="mailt:info@fastoomerchant.com" style="color: inherit; text-decoration: none;">info@fastoomerchant.com</a>',
      },
      {
        icon: require('@/assets/icons/i_location.svg'),
        title: 'Address',
        value: '12 M.Aleksidze str., floor 14, <br/> Office space №46, <br/> Tbilisi, Georgia',
      },
      {
        icon: require('@/assets/icons/i_identify.svg'),
        title: 'Identification Number',
        value: '405550899',
      },
    ];

    const solutionLinks = [
      { path: pathes.SOLUTION_CREDIT_CARD, label: 'Credit Card Processing' },
      { path: pathes.SOLUTION_ACQUIRING, label: 'Internet Acquiring Solution' },
      { path: pathes.SOLUTION_PAYMENT_GATEWAY, label: 'Payment Gateway' },
      { path: pathes.SOLUTION_RECURRING_BILLING, label: 'Recurring Billing service' },
      { path: pathes.SOLUTION_MULTICURRENCY_PROCESSING, label: 'Multicurrency Processing' },
    ];

    const supportLinks = [
      { label: 'F.A.Q.', path: pathes.FAQ },
      { label: 'Glossary', path: pathes.GLOSSARY },
      { label: 'Contact Us', path: pathes.CONTACTS },
    ];

    return { contacts, supportLinks, solutionLinks };
  },
};
</script>

<style lang="scss" scoped>
@import './footer.scss';
</style>
