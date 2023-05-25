<template>
  <div class="select-field__item" @click="$emit('select', option)">
    <div class="select-field__item-value">
      <div class="select-field__item-content">
        {{ option.label }}
        <span class="select-field__item-hint">{{ option.hint }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['select'],
  props: ['option', 'cheched'],
};
</script>
<style lang="scss" scoped>
@import './select.scss';
</style>
