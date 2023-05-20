<template>
  <v-header />
  <v-container :classes="classes">
    <slot></slot>
  </v-container>
  <v-footer />
</template>

<script>
import VHeader from '../Header/VHeader.vue';
import VFooter from '../Footer/VFooter.vue';
import VContainer from '../Container/VContainer.vue';
export default {
  props: ['classes'],
  components: {
    VHeader,
    VFooter,
    VContainer,
  },
};
</script>

<style lang="scss" scoped></style>
