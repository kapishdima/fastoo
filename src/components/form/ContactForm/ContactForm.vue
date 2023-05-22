<template>
  <div class="contact-form__container">
    <v-form>
      <template #fields="{}">
        <div class="form-row">
          <form-field label="Full name" size="md">
            <input-field variant="filled" />
          </form-field>
          <form-field label="Email" size="md">
            <input-field variant="filled" />
          </form-field>
        </div>
        <div class="form-row">
          <form-field label="Phone" size="md">
            <tel-input variant="filled" />
          </form-field>
          <form-field label="Subject" size="md">
            <input-field variant="filled" />
          </form-field>
        </div>
        <form-field label="Your message" size="md">
          <textarea-input variant="filled" />
        </form-field>
        <form-button size="md">Send Message</form-button>
      </template>
    </v-form>
  </div>
</template>

<script>
import VForm from '../VForm.vue';
import FormButton from '@/components/button/FormButton.vue';
import FormField from '@/components/fields/FormField.vue';
import InputField from '@/components/fields/InputField.vue';
import TelInput from '@/components/fields/TelInput.vue';
import TextareaInput from '@/components/fields/TextareaInput.vue';

export default {
  components: {
    VForm,
    FormField,
    InputField,
    TelInput,
    TextareaInput,
    FormButton,
  },
};
</script>

<style lang="scss" scoped>
@import '../form.scss';
@import './contact-form.scss';
</style>
