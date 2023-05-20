<template>
  <div class="form-field">
    <label class="form-field__label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['label'],
};
</script>

<style lang="scss" scoped>
@import './fields.scss';
</style>
