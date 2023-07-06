<template>
  <select-field :options="options" :placeholder="$t('Select a year')" />
</template>

<script>
import SelectField from './select/SelectField.vue';

export default {
  setup() {
    const years = Array(10)
      .fill(0)
      .map((_, index) => 2022 + index);

    const options = years.map((year) => ({ value: year, label: year }));

    return {
      options,
    };
  },
  components: {
    SelectField,
  },
};
</script>

<style lang="scss" scoped></style>
