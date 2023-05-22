<template>
  <div class="form-field" :class="`form-field--${size}`">
    <label class="form-field__label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['label', 'size'],
};
</script>

<style lang="scss" scoped>
@import './fields.scss';
</style>
