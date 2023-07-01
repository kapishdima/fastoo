<template>
  <div class="card navigation-card">
    <router-link
      class="navigation-card__item"
      v-for="(item, index) of list"
      :key="item.title"
      :to="{ path: item.path }"
      :class="index === activeIndex ? 'navigation-card__item--active' : ''"
    >
      {{ $t(item.title) }}
    </router-link>
  </div>
</template>

<script>
import { getSolutionsMenu } from '@/app/router';
export default {
  props: ['activeIndex'],
  setup() {
    const list = getSolutionsMenu().children;

    return { list };
  },
};
</script>

<style lang="scss" scoped>
@import './card.scss';
@import './navigation-card.scss';
</style>
