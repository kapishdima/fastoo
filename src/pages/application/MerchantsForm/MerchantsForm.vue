<template>
  <v-page classes="merchants-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Account" />

    <section class="section-merchants">
      <div class="section-decoration"></div>
      <div class="section-merchants__title heading-2">{{ $t('Application form') }}</div>

      <div class="merchants-form-container">
        <v-form classes="merchants-form" :initial-values="merchants" @submit="submitMerchants">
          <template #fields="{ values }">
            <div class="merchant-item" v-for="(merchant, index) of merchants" :key="merchant.id">
              <h5 class="merchant-item__title" v-if="index !== 0">{{ $t('Next merchant') }}</h5>
              <form-field size="md" label="Merchant web link">
                <input-field size="md" v-model="values[index].merchant_web_link" />
              </form-field>
              <form-field size="md" label="Legal name">
                <input-field size="md" v-model="values[index].legal_name" />
              </form-field>
              <form-field size="md" label="Company Identification Number">
                <input-field size="md" v-model="values[index].cin" />
              </form-field>
              <form-field size="md" label="Merchant category(MCC)">
                <input-field size="md" v-model="values[index].mcc" />
              </form-field>
              <form-field size="md" label="Expected Transaction Amount">
                <input-field size="md" v-model="values[index].expected_transations_amount" />
              </form-field>
              <form-field size="md" label="Expected Transaction Count">
                <input-field size="md" v-model="values[index].expected_transations_count" />
              </form-field>

              <div class="merchant-actions">
                <div
                  class="add-merchant merchant-actions__item"
                  v-if="index === merchants.length - 1"
                  @click="addMerchant"
                >
                  <img src="@/assets/icons/circle-plus-icon.svg" alt="" />
                  {{ $t('To add another merchant') }}
                </div>

                <div
                  class="remove-merchant merchant-actions__item"
                  v-if="index !== 0"
                  @click="removeMerchant(index)"
                >
                  <img src="@/assets/icons/circle-delete-icon.svg" alt="" />
                  {{ $t('To delete') }}
                </div>
              </div>
            </div>

            <div class="form-actions">
              <v-button type="submit">{{ $t('Next step') }}</v-button>
            </div>
          </template>
        </v-form>
      </div>
    </section>
  </v-page>
</template>

<script>
import VPage from '@/components/layout/Page/VPage.vue';
import VButton from '@/components/button/VButton.vue';
import VForm from '@/components/form/VForm.vue';
import FormField from '@/components/fields/FormField.vue';
import InputField from '@/components/fields/InputField.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';

import { pathes, router } from '@/app/router';

export default {
  setup() {
    return {
      pathes,
    };
  },

  data() {
    return {
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
    };
  },

  mounted() {
    const applicationData = window.localStorage.getItem('application_data');

    if (!applicationData) {
      return;
    }

    const merchants = JSON.parse(applicationData).merchants;

    this.merchants = merchants;
  },

  methods: {
    addMerchant() {
      this.merchants = [...this.merchants, {}];
    },
    removeMerchant(index) {
      this.merchants = this.merchants.filter((_, merchantIndex) => merchantIndex !== index);
    },
    submitMerchants(values) {
      const applicationData = JSON.parse(window.localStorage.getItem('application_data') || '{}');

      window.localStorage.setItem(
        'application_data',
        JSON.stringify({ ...applicationData, merchants: values }),
      );
      router.push(pathes.ACCOUNT_COMPLETE_PAGE);
    },
  },

  components: {
    VPage,
    VButton,
    VForm,
    SectionBanner,
    FormField,
    InputField,
  },
};
</script>

<style lang="scss" scoped>
@import './merchants.scss';
</style>
