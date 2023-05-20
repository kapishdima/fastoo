<template>
  <div class="card interaction-card">
    <h4 class="interaction-card__title">{{ title }}</h4>
    <h5 class="interaction-card__subtitle">{{ subtitle }}</h5>
    <div class="interaction-card__row">
      <div class="interaction-card__index">0{{ index }}</div>
      <img :src="icon" alt="" v-if="!hasSlot" />
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index', 'title', 'subtitle', 'icon'],
  computed: {
    hasSlot() {
      return Boolean(this.$slots.extra);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './card.scss';
@import './interaction-card.scss';
</style>
