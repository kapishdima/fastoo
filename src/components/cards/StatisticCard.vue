<template>
  <div class="card statistic-card">
    <img :src="icon" alt="" class="statistic-card__icon" />
    <h4 class="statistic-card__value">{{ value }}</h4>
    <h4 class="statistic-card__title">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  props: ['icon', 'value', 'title'],
};
</script>

<style lang="scss" scoped>
@import './card.scss';
@import './statistic-card.scss';
</style>
