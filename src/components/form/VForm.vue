<template>
  <form :class="classes" class="form-container" @submit.prevent @submit.stop @submit="onSubmit">
    <h5 class="form-subtitle" v-if="Boolean(subtitle)">{{ subtitle }}</h5>
    <slot
      name="fields"
      :values="values"
      :errors="errors"
      :hasErrors="hasErrors"
      :validateAt="validateAt"
      ref="slot"
    ></slot>
  </form>
</template>

<script>
import { validateAll, validateOne } from './validate';
import set from 'lodash.set';
export default {
  emits: ['submit'],
  props: {
    classes: {
      type: String,
      required: false,
    },
    initialValues: {
      type: Object,
      required: true,
    },
    schema: {
      required: false,
    },
    subtitle: {
      required: false,
    },
  },

  data() {
    return {
      values: this.initialValues,
      errors: {},
    };
  },

  computed: {
    hasErrors() {
      return Boolean(Object.keys(this.errors).length > 0);
    },
  },

  watch: {
    initialValues(newValues) {
      this.values = newValues;
    },
    errors(values) {
      const firstField = Object.keys(values)[0];
      const field = document.querySelector(`[name="${firstField}"]`);
      if (!field) {
        return;
      }

      const offset = 20;
      const top = field.getBoundingClientRect().top - offset;

      window.scrollTo({ top });

      field.focus();
    },
  },

  methods: {
    async onSubmit() {
      const valid = await this.validate();

      if (valid) {
        this.$emit('submit', this.values);
      }
    },
    async validate() {
      if (!this.schema) {
        console.error("Validation schema doen't provided");
        return true;
      }

      this.errors = await validateAll(this.values, this.schema);
      return Boolean(Object.keys(this.errors).length <= 0);
    },

    async validateAt(field) {
      if (!this.schema) {
        console.error("Validation schema doen't provided");
        return true;
      }

      const error = await validateOne(field, this.values, this.schema);

      set(this.errors, field, error);
    },
  },
};
</script>

<style lang="scss">
@import './form.scss';
</style>
