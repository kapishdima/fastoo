<template>
  <div class="card" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['classes'],
};
</script>

<style lang="scss" scoped>
@import './card.scss';
</style>
