<template>
  <v-page classes="merchants-page">
    <section-banner :bg="require('@/assets/section-bg.png')" title="Account" />

    <section class="section-merchants">
      <div class="section-decoration"></div>
      <div class="section-merchants__title heading-2">Application Form 2</div>

      <div class="merchants-form-container">
        <v-form classes="merchants-form">
          <template #fields>
            <div class="merchant-item" v-for="(merchant, index) of merchants" :key="merchant.id">
              <h5 class="merchant-item__title" v-if="index !== 0">Next merchant</h5>
              <form-field size="md" label="Merchant web link">
                <input-field size="md" />
              </form-field>
              <form-field size="md" label="Legal name">
                <input-field size="md" />
              </form-field>
              <form-field size="md" label="Company Identification Number:">
                <input-field size="md" />
              </form-field>
              <form-field size="md" label="Merchant category(MCC)">
                <input-field size="md" />
              </form-field>
              <form-field size="md" label="Expected Transaction Amount">
                <input-field size="md" />
              </form-field>
              <form-field size="md" label="Expected Transaction Count">
                <input-field size="md" />
              </form-field>

              <div class="merchant-actions">
                <div
                  class="add-merchant merchant-actions__item"
                  v-if="index === merchants.length - 1"
                  @click="addMerchant"
                >
                  <img src="@/assets/icons/circle-plus-icon.svg" alt="" />
                  To add another merchant
                </div>

                <div
                  class="remove-merchant merchant-actions__item"
                  v-if="index !== 0"
                  @click="removeMerchant(index)"
                >
                  <img src="@/assets/icons/circle-delete-icon.svg" alt="" />
                  To delete
                </div>
              </div>
            </div>

            <div class="form-actions">
              <router-link class="button-link" :to="{ path: pathes.ACCOUNT_COMPLETE_PAGE }">
                <v-button>Next step</v-button>
              </router-link>
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

import { pathes } from '@/app/router';

export default {
  setup() {
    return {
      pathes,
    };
  },

  data() {
    return {
      merchants: [{}],
    };
  },

  methods: {
    addMerchant() {
      this.merchants = [...this.merchants, {}];
    },
    removeMerchant(index) {
      this.merchants = this.merchants.filter((_, merchantIndex) => merchantIndex !== index);
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
