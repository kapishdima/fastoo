<template>
  <select-field
    classes="locale-select"
    variant="transparent"
    v-model="$i18n.locale"
    :options="locales"
  />
</template>

<script>
import SelectField from '@/components/fields/select/SelectField.vue';
import { isTablet } from '@/app/media-query/media-query';
export default {
  components: {
    SelectField,
  },

  computed: {
    locales() {
      if (isTablet()) {
        return this.$i18n.availableLocales.map((locale) => {
          console.log(this.$i18n.t(locale).split(' ')[1]);
          return {
            label: this.$i18n.t(locale).split(' ')[1],
            value: locale.split(' ')[0],
          };
        });
      }

      return this.$i18n.availableLocales.map((locale) => ({
        label: this.$i18n.t(locale),
        value: locale.split(' ')[0],
      }));
    },
  },

  watch: {
    '$i18n.locale': {
      handler(value) {
        window.localStorage.setItem('locale', value);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './locale-select.scss';
</style>
