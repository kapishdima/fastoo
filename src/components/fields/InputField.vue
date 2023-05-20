<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :name="name"
    :required="required"
    :class="`form-field__input--${size} form-field__input--${variant}`"
    :value="modelValue"
    :disabled="disabled"
    @input="input($event)"
    @blur="$emit('blur')"
    class="form-field__input"
  />
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: ['name', 'type', 'placeholder', 'required', 'size', 'variant', 'modelValue', 'disabled'],
  emits: ['update:modelValue', 'blur'],

  methods: {
    input(event) {
      const value = event.target?.value;
      this.$emit('update:modelValue', value);
    },
  },
});
</script>

<style scoped lang="scss">
@import './fields.scss';
</style>
