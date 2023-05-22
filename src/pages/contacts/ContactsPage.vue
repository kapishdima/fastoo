<template>
  <v-page classes="contacts-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Contact us" />
    <contacts-list />
    <section class="section-contacts-form">
      <h3 class="heading-3 section-contacts-form__title">Drop us message for any query</h3>
      <div class="section-decoration"></div>
      <contact-form />
    </section>

    <section class="section-contact-map">
      <div class="address-label">
        <img src="@/assets/icons/contacts/office-icon.svg" alt="" class="address-label__icon" />
        <p class="address-label__text">
          555 Burrard <br />
          StVancouver,BC V7X <br />
          1M8,CanadaOffice 02-125
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.4737555482725!2d-123.12164732385367!3d49.28636807139335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671822d969bd9%3A0x3899cbe47e0fa337!2zNTU1IEJ1cnJhcmQgU3QsIFZhbmNvdXZlciwgQkMgVjdYIDFNOCwg0JrQsNC90LDQtNCw!5e0!3m2!1sru!2sua!4v1684771105422!5m2!1sru!2sua"
        width="800"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import ContactForm from '@/components/form/ContactForm/ContactForm.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';
import ContactsList from '@/modules/ContactsList/ContactsList.vue';
export default {
  components: {
    VPage,
    SectionBanner,
    ContactsList,
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
@import './contacts.scss';
</style>
