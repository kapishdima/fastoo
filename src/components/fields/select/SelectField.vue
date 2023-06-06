<template>
  <div
    class="select-field"
    :class="{
      'select-field--active': opened,
      'select-field--disabled': disabled,
      [`select-field--${variant}`]: true,
      [classes]: true,
    }"
    ref="selectField"
  >
    <div
      class="select-field__container form-field__input form-field__input--filled"
      @click="toggle"
    >
      <div class="selected-input">
        <div class="selected-input__field">
          <span v-if="!selectedLabel && placeholder" class="selected-input__placeholder">
            {{ placeholder }}
          </span>
          {{ selectedLabel }}
        </div>
      </div>
    </div>
    <div class="select-field__dropdown">
      <template v-for="option in options" :key="option.value">
        <option-item
          :option="option"
          :checked="selected?.value === option.value"
          @select="select"
        />
      </template>
    </div>
  </div>
</template>

<script>
import OptionItem from './OptionItem.vue';
export default {
  emits: ['update:modelValue'],
  props: ['name', 'options', 'modelValue', 'disabled', 'size', 'placeholder', 'classes', 'variant'],

  components: {
    OptionItem,
  },

  data() {
    return {
      opened: false,
      value: this.modelValue || '',
      selectedLabel: '',
      selected: null,
    };
  },

  mounted() {
    document.addEventListener('keydown', this.onEscapePressed);
  },

  beforeUnmount() {
    document.removeEventListener('keydown', this.onEscapePressed);
  },

  watch: {
    selected() {
      this.value = this.selected?.label || '';
    },

    modelValue: {
      handler(selected) {
        this.selectedLabel =
          this.$props.options.find(({ value }) => value === selected)?.label || '';
        this.selected = this.$props.options.find(({ value }) => value === selected);
      },
      immediate: true,
    },
  },

  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    close() {
      this.opened = false;
    },
    select(option) {
      this.selected = option;
      this.selectedLabel = option.label;
      this.$emit('update:modelValue', option.value);
      this.close();
    },
    clear() {
      this.value = '';
    },
    onEscapePressed(event) {
      if (event.key === 'Escape') this.close();
    },
  },
};
</script>
<style lang="scss">
@import '../fields.scss';
@import './select.scss';
</style>
