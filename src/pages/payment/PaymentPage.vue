<template>
  <v-page classes="payment-page">
    <section-banner
      :bg="require('@/assets/section-bg.png')"
      title="Please, choose the game provider and your game login to top up your balance"
      :has-breadcrumbs="false"
    />

    <section class="section-payment-form">
      <div class="payment-form-container">
        <v-form>
          <template #fields="{}">
            <div class="form-row">
              <form-field size="md" label="Your firstname*">
                <input-field variant="filled" placeholder="Enter your firstname" />
              </form-field>
              <form-field size="md" label="Your lastname*">
                <input-field variant="filled" placeholder="Enter your lastname" />
              </form-field>
            </div>
            <div class="form-row">
              <form-field size="md" label="Email*">
                <input-field variant="filled" placeholder="test@test.com" />
              </form-field>
              <form-field size="md" label="Phone number* (without +)">
                <input-field variant="filled" placeholder="795111114669" />
              </form-field>
            </div>
            <div class="form-row">
              <form-field size="md" label="Country*">
                <input-field variant="filled" placeholder="Enter country" />
              </form-field>
              <form-field size="md" label="State/City*">
                <input-field variant="filled" placeholder="Enter your state / city" />
              </form-field>
            </div>
            <div class="form-row">
              <form-field size="md" label="Address*">
                <input-field variant="filled" placeholder="Enter your address" />
              </form-field>
              <form-field size="md" label="ZIP Code*">
                <input-field variant="filled" placeholder="Enter your ZIP code" />
              </form-field>
            </div>
            <div class="form-row">
              <form-field size="md" label="Select a game">
                <provider-select />
              </form-field>
              <form-field size="md" label="Your nickname*">
                <input-field variant="filled" placeholder="Enter your nickname" />
              </form-field>
              <form-field size="md" label="Deposit* (MIN 1 EUR)">
                <input-field variant="filled" placeholder="10.25">
                  <template #preffix>
                    <div class="form-field__currency">EUR</div>
                  </template>
                </input-field>
              </form-field>
            </div>
            <div class="form-row">
              <form-field size="md" label="First and last name on the CC*">
                <input-field variant="filled" placeholder="CARDHOLDER" />
              </form-field>
              <form-field size="md" label="Credit card number*">
                <input-field variant="filled" placeholder="1111222233334444" />
              </form-field>
            </div>
            <div class="form-row">
              <form-field size="md" label="Month from the CC*">
                <month-select />
              </form-field>
              <form-field size="md" label="Year from the CC*">
                <years-select />
              </form-field>
              <form-field size="md" label="CVV Code*">
                <input-field variant="filled" placeholder="123" />
              </form-field>
            </div>
            <form-button size="md">Make a payment</form-button>
          </template>
        </v-form>
      </div>
    </section>
  </v-page>
</template>

<script>
import VForm from '@/components/form/VForm.vue';
import VPage from '@/components/layout/Page/VPage.vue';
import SectionBanner from '@/components/layout/Section/SectionBanner.vue';
import FormField from '@/components/fields/FormField.vue';
import InputField from '@/components/fields/InputField.vue';
import FormButton from '@/components/button/FormButton.vue';

import ProviderSelect from '@/components/fields/ProviderSelect.vue';
import MonthSelect from '@/components/fields/MonthSelect.vue';
import YearsSelect from '@/components/fields/YearsSelect.vue';

export default {
  components: {
    VPage,
    SectionBanner,
    VForm,
    FormField,
    InputField,
    FormButton,
    ProviderSelect,
    MonthSelect,
    YearsSelect,
  },
};
</script>

<style lang="scss" scoped>
@import './payment.scss';
</style>
