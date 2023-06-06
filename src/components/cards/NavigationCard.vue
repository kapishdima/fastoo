<template>
  <div class="card navigation-card">
    <router-link
      class="navigation-card__item"
      v-for="(item, index) of list"
      :key="item.label"
      :to="{ path: item.path }"
      :class="index === activeIndex ? 'navigation-card__item--active' : ''"
    >
      {{ $t(item.label) }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['list', 'activeIndex'],
};
</script>

<style lang="scss" scoped>
@import './card.scss';
@import './navigation-card.scss';
</style>
