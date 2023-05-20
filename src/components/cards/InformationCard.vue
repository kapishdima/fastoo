<template>
  <div class="card information-card">
    <div class="information-card__icon">
      <img :src="icon" :alt="title" />
    </div>
    <h4 class="information-card__title">{{ title }}</h4>
    <div class="information-card__description" v-html="description"></div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'title', 'description'],
};
</script>

<style lang="scss" scoped>
@import './card.scss';
@import './inforamtion-card.scss';
</style>
