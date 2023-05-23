<template>
  <div class="section-banner" :class="{ reverse }">
    <div class="section-banner-bg">
      <img :src="bg" alt="" class="section-banner-bg__image" />
    </div>
    <div class="section-banner__content">
      <h2 class="section-banner__title">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bg', 'title', 'reverse'],
};
</script>

<style lang="scss" scoped>
@import './section-banner.scss';
</style>
