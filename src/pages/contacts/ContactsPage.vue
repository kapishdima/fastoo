<template>
  <v-page classes="contacts-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Contact us" />
    <contacts-list />
    <section class="section-contacts-form">
      <h3 class="heading-3 section-contacts-form__title">
        {{ $t('Drop us message for any query') }}
      </h3>
      <div class="section-decoration"></div>
      <contact-form />
    </section>

    <section class="section-contact-map">
      <div class="address-label">
        <img src="@/assets/icons/contacts/office-icon.svg" alt="" class="address-label__icon" />
        <p class="address-label__text">
          12 M.Aleksidze str., floor 14, <br />
          Office space №46, <br />
          Tbilisi, Georgia
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.179339946306!2d44.78011568364207!3d41.716648797155706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d523776013%3A0x694a641dee3d7d9d!2zMTIgTWVyYWIgQWxla3NpZHplIFN0LCBUJ2JpbGlzaSAwMTcxLCDQk9GA0YPQt9C40Y8!5e0!3m2!1sru!2sua!4v1685184913086!5m2!1sru!2sua"
        width="600"
        height="450"
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
