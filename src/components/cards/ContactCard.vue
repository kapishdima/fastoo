<template>
  <div class="card contact-card">
    <div class="contact-card__icon-container">
      <img :src="icon" />
    </div>
    <h5 class="contact-card__title">{{ title }}</h5>
    <div class="contact-card__value" v-html="value"></div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'title', 'value'],
};
</script>

<style lang="scss" scoped>
@import './card.scss';
@import './contact-card.scss';
</style>
