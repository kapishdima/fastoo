<template>
  <select-field :options="options" placeholder="Select a month" />
</template>

<script>
import SelectField from './select/SelectField.vue';

export default {
  setup() {
    const months = Array(12)
      .fill(0)
      .map((_, index) => {
        if (index + 1 < 10) {
          return `0${index + 1}`;
        }

        return index + 1;
      });

    const options = months.map((month) => ({ value: month, label: month }));

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
