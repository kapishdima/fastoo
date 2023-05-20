<template>
  <footer>
    <v-container classes="footer">
      <div class="footer-text">
        <h2 class="heading-2">New Payment System LLC</h2>
        <p class="paragraph-footer">
          If you are reading this, then you are looking for more profitable and stable solution!
          Receive our offer and solve the payment solution issue once and for all!
        </p>
      </div>
      <div class="footer-item">
        <h4 class="footer-item__title">Contact</h4>
        <div class="footer-contact" v-for="contact of contacts" :key="contact.title">
          <img :src="contact.icon" alt="" class="footer-contact__icon" />

          <div class="footer-contact__info">
            <h6 class="footer-contact__title paragraph">{{ contact.title }}</h6>
            <span class="footer-contact__value subtitle" v-html="contact.value"></span>
          </div>
        </div>
      </div>
      <div class="footer-item">
        <h4 class="footer-item__title">Solutions</h4>
        <a href="#" class="footer-link subtitle" v-for="link of solutionLinks" :key="link">
          {{ link }}
        </a>
      </div>
      <div class="footer-item">
        <h4 class="footer-item__title">Support</h4>
        <a href="#" class="footer-link subtitle" v-for="link of supportLinks" :key="link">
          {{ link }}
        </a>
      </div>
    </v-container>
    <div class="copyright">Copyright 2023 New Payment System LLC. All Rights Reserved</div>
  </footer>
</template>

<script>
import VContainer from '../Container/VContainer.vue';
export default {
  components: {
    VContainer,
  },
  setup() {
    const contacts = [
      { icon: require('@/assets/icons/i_phone.svg'), title: 'Phone', value: '+380 773 433 321' },
      {
        icon: require('@/assets/icons/i_mail.svg'),
        title: 'Email',
        value: 'assistance@magua-pay.com',
      },
      {
        icon: require('@/assets/icons/i_location.svg'),
        title: 'Address',
        value: '555 Burrard St <br/> Vancouver,BC V7X 1M8,Canada <br/> Office 02-125',
      },
      {
        icon: require('@/assets/icons/i_identify.svg'),
        title: 'Identification Number',
        value: '405550899',
      },
    ];

    const solutionLinks = [
      'Credit Card Processing',
      'Internet Acquiring Solution',
      'Payment Gateway',
      'Recurring Billing service',
      'Multicurrency Processing',
      'Payment Options',
      'Prepaid Cards',
    ];

    const supportLinks = ['F.A.Q.', 'Glossary', 'Terms and Conditions', 'AML | KYC', 'Contact Us'];

    return { contacts, supportLinks, solutionLinks };
  },
};
</script>

<style lang="scss" scoped>
@import './footer.scss';
</style>
