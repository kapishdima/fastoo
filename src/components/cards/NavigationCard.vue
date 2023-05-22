<template>
  <div class="card navigation-card">
    <router-link
      class="navigation-card__item"
      v-for="item of list"
      :key="item.label"
      :to="{ path: item.path }"
    >
      {{ item.label }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['list'],
};
</script>

<style lang="scss" scoped>
@import './card.scss';
@import './navigation-card.scss';
</style>
