<template>
  <button class="form-button" :class="`form-button--${size}`">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['size'],
};
</script>

<style lang="scss" scoped>
@import './buttons.scss';
</style>
