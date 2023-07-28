<template>
  <input
    ref="input"
    v-imask="mask"
    :value="modelValue"
    :name="name"
    :required="required"
    type="tel"
    class="form-field__input"
    :class="`form-field__input--${variant}`"
    @accept="onAccept"
    @blur="$emit('blur')"
  />
  <!-- <input
    ref="input"
    :value="modelValue"
    :placeholder="placeholder || '+99 (5_ _) _ _ _-_ _-_ _'"
    :name="name"
    :required="required"
    type="tel"
    class="form-field__input"
    :class="`form-field__input--${variant}`"
    @accept="onAccept"
    @blur="$emit('blur')"
  /> -->
</template>

<script>
import { defineComponent } from 'vue';
import { IMaskDirective } from 'vue-imask';

import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
// import { ref } from 'vue';
// import { onMounted } from 'vue';

export default defineComponent({
  emits: ['update:modelValue', 'blur'],
  props: {
    name: String,
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    modelValue: {
      type: String,
      required: false,
    },
    variant: {
      type: String,
      required: false,
    },
  },

  directives: {
    imask: IMaskDirective,
  },

  mounted() {
    // Initialize intlTelInput and imask when the component is mounted
    this.initPhoneInput();
  },

  data() {
    return {
      mask: {
        mask: '000-000-00-00',
        lazy: false,
      },
    };
  },

  methods: {
    onAccept(event) {
      const maskRef = event.detail;
      this.$emit('update:modelValue', maskRef.unmaskedValue);
    },
    initPhoneInput() {
      const input = this.$refs.input;
      intlTelInput(input, {
        initialCountry: 'ge', // You can set the default country here.
        separateDialCode: true, // Show the dial code in a separate element.
      });
    },
  },
});
</script>

<style scoped lang="scss">
@import './fields.scss';
</style>
