<template>
  <v-page classes="application-form-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Account" />

    <section class="section-application-form">
      <div class="section-application-form__header">
        <h2 class="heading-2">Application form</h2>
      </div>

      <v-form classes="application-form" @submit="submitApplication" :initial-values="formData">
        <template #fields="{ values }">
          <v-tabs>
            <v-tab title="E-Comm Merchant Application Form ">
              <div class="application-form-column">
                <form-field label="Application Date" size="md">
                  <datepicker-field size="md" v-model="values.application_date" />
                </form-field>
                <div class="checkbox-group">
                  <checkbox-field key="New Merchant" label="New Merchant" />
                  <checkbox-field key="Existing Merchant" label="Existing Merchant" />
                </div>
              </div>
            </v-tab>
            <v-tab title="Merchant Information">
              <div class="application-form-row">
                <template v-for="field of columns['Merchant Information']" :key="field.label">
                  <form-field size="md" :label="field.label" v-if="field.type === 'text'">
                    <input-field size="md" v-model="values[field.model]" />
                  </form-field>

                  <form-field v-if="field.type === 'checkbox'" :label="field.label" size="md">
                    <div class="checkbox-group">
                      <checkbox-field
                        v-for="checkbox of field.children"
                        :key="checkbox.label"
                        :label="checkbox.label"
                      />
                    </div>
                  </form-field>
                </template>
              </div>
            </v-tab>
            <v-tab title="Ownership Information">
              <div class="application-form-row">
                <template v-for="field of columns['Ownership Information']" :key="field.label">
                  <form-field size="md" :label="field.label" v-if="field.type === 'text'">
                    <input-field size="md" v-model="values[field.model]" />
                  </form-field>

                  <form-field v-if="field.type === 'checkbox'" :label="field.label" size="md">
                    <div class="checkbox-group">
                      <checkbox-field
                        v-for="checkbox of field.children"
                        :key="checkbox.label"
                        :label="checkbox.label"
                      />
                    </div>
                  </form-field>
                </template>
              </div>
            </v-tab>
            <v-tab title="Limits">
              <div class="application-form-row">
                <template v-for="field of columns['Limits']" :key="field.label">
                  <form-field size="md" :label="field.label" v-if="field.type === 'text'">
                    <input-field size="md" v-model="values[field.model]" />
                  </form-field>

                  <form-field v-if="field.type === 'checkbox'" :label="field.label" size="md">
                    <div class="checkbox-group">
                      <checkbox-field
                        v-for="checkbox of field.children"
                        :key="checkbox.label"
                        :label="checkbox.label"
                      />
                    </div>
                  </form-field>
                </template>
              </div>
            </v-tab>
            <v-tab title="Activity Range ">
              <div class="application-form-row">
                <template v-for="field of columns['Activity Range']" :key="field.label">
                  <form-field size="md" :label="field.label" v-if="field.type === 'text'">
                    <input-field size="md" v-model="values[field.model]" />
                  </form-field>

                  <form-field v-if="field.type === 'checkbox'" :label="field.label" size="md">
                    <div class="checkbox-group">
                      <checkbox-field
                        v-for="checkbox of field.children"
                        :key="checkbox.label"
                        :label="checkbox.label"
                      />
                    </div>
                  </form-field>
                </template>
              </div>
            </v-tab>
            <v-tab title="Type of Integration">
              <div class="application-form-column">
                <template v-for="field of columns['Type of Integration']" :key="field.label">
                  <form-field v-if="field.type === 'checkbox'" :label="field.label" size="md">
                    <div class="checkbox-group">
                      <checkbox-field
                        v-for="checkbox of field.children"
                        :key="checkbox.label"
                        :label="checkbox.label"
                      />
                    </div>
                  </form-field>
                </template>
              </div>
            </v-tab>
            <v-tab title="Additional features">
              <div class="application-form-column">
                <template v-for="field of columns['Additional features']" :key="field.label">
                  <form-field v-if="field.type === 'checkbox'" :label="field.label" size="md">
                    <div class="checkbox-group">
                      <checkbox-field
                        v-for="checkbox of field.children"
                        :key="checkbox.label"
                        :label="checkbox.label"
                      />
                    </div>
                  </form-field>
                </template>
              </div>
            </v-tab>
            <v-tab title="Merchant Portal">
              <div class="application-form-column">
                <template v-for="field of columns['Merchant Portal']" :key="field.label">
                  <form-field size="md" :label="field.label" v-if="field.type === 'text'">
                    <input-field size="md" v-model="values[field.model]" />
                  </form-field>

                  <form-field v-if="field.type === 'checkbox'" :label="field.label" size="md">
                    <div class="checkbox-group">
                      <checkbox-field
                        v-for="checkbox of field.children"
                        :key="checkbox.label"
                        :label="checkbox.label"
                      />
                    </div>
                  </form-field>
                </template>
              </div>
            </v-tab>
            <v-tab title="To receive application status ">
              <div class="application-form-column">
                <template
                  v-for="field of columns['To receive application status']"
                  :key="field.label"
                >
                  <form-field size="md" :label="field.label" v-if="field.type === 'text'">
                    <input-field size="md" v-model="values[field.model]" />
                  </form-field>

                  <form-field v-if="field.type === 'checkbox'" :label="field.label" size="md">
                    <div class="checkbox-group">
                      <checkbox-field
                        v-for="checkbox of field.children"
                        :key="checkbox.label"
                        :label="checkbox.label"
                      />
                    </div>
                  </form-field>
                </template>
              </div>
            </v-tab>
          </v-tabs>
          <div class="form-actions">
            <!-- <router-link class="button-link" :to="{ path: pathes.ACCOUNT_MERCHANTS_FORM }">
            </router-link> -->
            <v-button type="submit">{{ $t('Next step') }}</v-button>
          </div>
        </template>
      </v-form>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import VForm from '@/components/form/VForm.vue';
import VButton from '@/components/button/VButton.vue';
import FormField from '@/components/fields/FormField.vue';
import InputField from '@/components/fields/InputField.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';
import CheckboxField from '@/components/fields/checkbox/CheckboxField.vue';
import VTab from '@/components/tabs/VTab.vue';
import VTabs from '@/components/tabs/VTabs.vue';
import DatepickerField from '@/components/fields/DatepickerField/DatepickerField.vue';

import { format } from '@/components/fields/DatepickerField/format';
import { pathes } from '@/app/router';
import set from 'lodash.set';
// import set from 'lodash.set';

// import { sendApplication } from '@/api/application.api';

export default {
  setup() {
    const columns = {
      'E-Comm Merchant Application Form': [
        { type: 'text', label: 'Application Date' }, // datepicker
        {
          type: 'checkbox',
          label: 'Merchant Type',
          children: [{ label: 'New Merchant' }, { label: 'Existing Merchant' }],
        },
      ],
      'Merchant Information': [
        { type: 'text', label: 'Registered Name', model: 'merchant.name' },
        { type: 'text', label: 'Trading Name', model: 'merchant.tranding_name' },
        { type: 'text', label: 'Business Registration Number', model: 'merchant.number' },
        { type: 'text', label: 'Registration Date', model: 'merchant.registration_date' }, // datepicker
        { type: 'text', label: 'Website / Live URL ', model: 'merchant.website' },
        {
          type: 'text',
          label: 'URLs and IP Addresses Impacting the Cardholder Data Environment to be Scanned',
          model: 'merchant.scanned_urls',
        },
        { type: 'text', label: 'URLs  - proof of ownership', model: 'merchant.url' },
        { type: 'text', label: 'Address', model: 'merchant.address' },
        { type: 'text', label: 'City', model: 'merchant.city' },
        { type: 'text', label: 'State', model: 'merchant.state' },
        { type: 'text', label: 'Country', model: 'merchant.country' },
        { type: 'text', label: 'Postcode', model: 'merchant.postcode' },
        {
          type: 'text',
          label: 'Nature of Core Business ',
          model: 'merchant.nature_of_core_business',
        },
        { type: 'text', label: 'License and related documetnation', model: 'merchant.documents' },
        { type: 'text', label: 'Contact Person’s Name', model: 'merchant.contact_person_name' },
        {
          type: 'text',
          label: 'Contact Person’s Mobile Number',
          model: 'merchant.contact_person_phone',
        },
        {
          type: 'text',
          label: 'Contact Person’s Email Address',
          model: 'merchant.contact_person_email',
        },
        {
          type: 'text',
          label: 'IT Manager’s Name (for technical purposes)',
          model: 'merchant.it_person_name',
        },
        { type: 'text', label: 'IT Manager’s Mobile Number', model: 'merchant.it_person_phone' },
        { type: 'text', label: 'IT Manager’s Email Address', model: 'merchant.it_person_email' },
        {
          type: 'text',
          label: 'Support Contact Person’s Name',
          model: 'merchant.support_person_name',
        },
        {
          type: 'text',
          label: 'Support Contact Person’s Mobile Number',
          model: 'merchant.support_person_phone',
        },
        {
          type: 'text',
          label: 'Support Contact Person’s Email Address',
          model: 'merchant.support_person_email',
        },
      ],
      'Ownership Information': [
        { type: 'text', label: 'Type of Ownership', model: 'owneship.type' },
        { type: 'text', label: 'Owner’s Name/s', model: 'owneship.owner_name' },
        { type: 'text', label: 'Registration No. / ID Card No.', model: 'owneship.id_card' },
        { type: 'text', label: 'Ownership Structure ', model: 'owneship.structure' },
        { type: 'text', label: 'Registered Address', model: 'owneship.address' },
        { type: 'text', label: 'Country', model: 'owneship.counry' },
        { type: 'text', label: 'Post Code', model: 'owneship.post_code' },
        { type: 'text', label: 'Phone', model: 'owneship.phone' },
        { type: 'text', label: 'Email', model: 'owneship.email' },
      ],
      Limits: [
        { type: 'text', label: 'Terminal Currency', model: 'limits.terminal_currency' },
        { type: 'text', label: 'Terminal Time Zone', model: 'limits.terminal_timezone' },
        { type: 'text', label: 'Average Transaction Daily Amount', model: 'limits.trans_avg' },
        { type: 'text', label: 'Estimated Monthly Volume', model: 'limits.estimated_month_value' },
        { type: 'text', label: 'Average Ticket Size', model: 'limits.avg_ticket_size' },
        { type: 'text', label: 'Maximum Ticket Size ', model: 'limits.max_ticket_size' },
        { type: 'text', label: 'Maximum TPS ', model: 'limits.max_tps' },
        { type: 'text', label: 'Avarege  TPS', model: 'limits.avg_tps' },
        { type: 'text', label: 'Refund daily avarage Amount ', model: 'limits.refund_amount' },
      ],
      'Activity Range': [
        { type: 'text', label: 'Expected transaction peack time slot/s', model: 'activity_range' },
      ],
      'Type of Integration': [
        {
          type: 'checkbox',
          label:
            'Is your technological architecture compliant  to the  payment cards industry data security standarts (PCI DSS)?',
          children: [{ label: 'Yes' }, { label: 'No' }],
        },
        {
          type: 'checkbox',
          label: 'Card data input method  - Payment Page',
          children: [{ label: 'Bank Payment Page' }, { label: 'Via API (PSI DSS Mandatory)' }],
        },
      ],
      'Additional features': [
        {
          type: 'checkbox',
          label: 'Authorization message',
          children: [{ label: 'Single (purchase)' }, { label: 'dual message (Pre-auth; capture)' }],
        },
        {
          type: 'checkbox',
          label: 'Dynamic Descriptor',
          children: [{ label: 'Yes' }, { label: 'No' }],
        },
        {
          type: 'checkbox',
          label: 'Refund',
          children: [{ label: 'Yes' }, { label: 'No' }],
        },
      ],
      'Merchant Portal': [
        {
          type: 'checkbox',
          label: 'Mercant Portal Access',
          children: [{ label: 'Yes' }, { label: 'No' }],
        },
        { type: 'text', label: 'Mercant Portal Admin user Information, Name, surname, Email' },
      ],
      'To receive application status': [
        { type: 'text', label: 'Email*' },
        { type: 'text', label: 'Phone number*' },
      ],
    };

    return { columns, pathes };
  },

  data() {
    return {
      formData: {
        application_date: format(new Date()),
        merchant: {
          type: '',
          name: '',
          url: '',
          address: '',
          state: '',
          country: '',
          postcode: '',
          nature_of_core_business: '',
          documents: '',
          contact_person_name: '',
          contact_person_phone: '',
          contact_person_email: '',
          it_person_name: '',
          it_person_phone: '',
          it_person_email: '',
          support_person_name: '',
          support_person_phone: '',
          support_person_email: '',
          scanned_urls: '',
        },
        owneship: {
          type: '',
          owner_name: '',
          id_card: '',
          structure: '',
          address: '',
          counry: '',
          post_code: '',
          phone: '',
          email: '',
        },
        limits: {
          terminal_currency: '',
          terminal_timezone: '',
          trans_avg: '',
          estimated_month_value: '',
          avg_ticket_size: '',
          max_ticket_size: '',
          max_tps: '',
          avg_tps: '',
          refund_amount: '',
        },
        activity_range: '',
        type_of_integration: {
          isSecureStructure: false,
          payment_page: 'Bank Payment Page',
        },
        additional_features: {
          hasAuthMessage: false,
          dynamicDescription: false,
          refund: false,
          merchant_portal_access: false,
          application_status_receiver: 'email',
        },

        merchants: [
          {
            merchant_web_link: '',
            legal_name: '',
            cin: '',
            mcc: '',
            expected_transations_amount: '',
            expected_transations_count: '',
          },
        ],

        documents: [File],
      },
    };
  },

  components: {
    VPage,
    VForm,
    VTabs,
    VTab,
    FormField,
    InputField,
    SectionBanner,
    CheckboxField,
    VButton,
    DatepickerField,
  },

  methods: {
    submitApplication(values) {
      const payload = Object.keys(values).reduce((acc, key) => {
        if (key.includes('.')) {
          set(acc, key, values[key]);
        } else {
          acc[key] = values[key];
        }

        return acc;
      }, {});

      console.log(payload);
      // sendApplication(values);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './application-form.scss';
</style>
