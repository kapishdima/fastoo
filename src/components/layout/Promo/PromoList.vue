<template>
  <div class="promo-list">
    <div class="promo-list__item" v-for="item of list" :key="item.id" :class="{ centered }">
      <div class="promo-list-icon-container">
        <img :src="item.icon" alt="" />
      </div>
      <div class="promo-list__text">
        <h4 class="promo-list__item-title">{{ item.title }}</h4>
        <p class="promo-list__item-description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'centered'],
};
</script>

<style lang="scss" scoped>
@import './promo.scss';
</style>
