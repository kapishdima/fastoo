<template>
  <div class="card-list">
    <template v-for="(item, index) of list" :key="item.id">
      <slot name="item" :item="item" :index="index" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './card.scss';
</style>
