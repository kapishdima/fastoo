<template>
  <div class="container" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['classes'],
};
</script>

<style lang="scss" scoped>
@import './container.scss';
</style>
