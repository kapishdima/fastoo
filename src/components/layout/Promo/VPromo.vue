<template>
  <div
    class="promo-container"
    :class="{ reverse, [classes]: classes, 'with-delimiter': hasDelimiter }"
  >
    <div class="promo-container__text">
      <h2 class="promo-container__title" v-if="title">{{ title }}</h2>
      <slot></slot>
    </div>

    <div class="promo-container__image">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'reverse', 'classes', 'title', 'has-delimiter'],
};
</script>

<style lang="scss" scoped>
@import './promo.scss';
</style>
