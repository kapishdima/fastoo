<template>
  <input
    type="checkbox"
    class="checkbox-field__input"
    :checked="modelValue || checked"
    :name="name"
    :disabled="disabled"
  />

  <div
    class="checkbox-field"
    :class="{
      'checkbox-field--checked': checked,
      'checkbox-field--disabled': disabled,
    }"
    @click="check"
  >
    <label v-if="Boolean(label)" for="#checkbox-field" class="checkbox-field__label">
      {{ label }}
    </label>
    <div id="checkbox-field" class="checkbox-field__box">
      <img v-if="checked" src="@/assets/icons/check-icon.svg" alt="Checked" />
    </div>
  </div>
  <div class="form-field__error" v-if="hasError">
    {{ error }}
  </div>
</template>

<script>
export default {
  emits: ['change', 'update:modelValue'],
  props: ['name', 'modelValue', 'label'],
  data() {
    return {
      checked: this.$props.modelValue,
    };
  },

  computed: {
    hasError() {
      return Boolean(this.$props.error);
    },
  },

  watch: {
    modelValue: {
      handler(value) {
        if (typeof value === 'string') {
          this.checked = JSON.parse(value);
        } else {
          this.checked = value;
        }
      },
      immediate: true,
    },
  },

  methods: {
    check() {
      this.checked = !this.checked;
      this.$emit('change', this.checked);
      this.$emit('update:modelValue', this.checked);
    },
  },
};
</script>
<style lang="scss">
@import './checkbox.scss';
</style>
