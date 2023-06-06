<template>
  <div class="section-banner" :class="{ reverse }">
    <div class="section-banner-bg">
      <img :src="bg" alt="" class="section-banner-bg__image" />
    </div>
    <div class="section-banner-overlay"></div>
    <div class="section-banner__content">
      <h2 class="section-banner__title">{{ $t(title) }}</h2>
      <div class="section-banner__breadcrumbs" v-if="hasBreadcrumbs">
        <router-link :to="{ path: pathes.INDEX }" class="breadcrums-link">
          {{ $t('Home') }}
        </router-link>
        <div class="breadcrums-link active">{{ $t(title) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { pathes } from '@/app/router';
export default {
  setup() {
    return { pathes };
  },
  props: {
    bg: {
      type: String,
    },
    title: {
      type: String,
    },
    reverse: {
      type: Boolean,
    },
    hasBreadcrumbs: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './section-banner.scss';
</style>
