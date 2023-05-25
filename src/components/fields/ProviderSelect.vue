<template>
  <select-field :options="options" placeholder="Select provider" />
</template>

<script>
import SelectField from './select/SelectField.vue';

export default {
  setup() {
    const providers = [
      'Select provider',
      '4Game',
      'Gaijin Online',
      'Galaxy',
      'War Thunder',
      'World of Warcraft',
      'Dota 2',
      'Warface',
      'Combat Arms',
      'CS:GO',
      'CrossFire',
      'Point Blank',
      'Jade Dynasty',
      'RIOT',
      'Skyforge',
      'Allodi Online',
      'PerfectWorld',
      'Para pa',
      'Legenda prime',
      'Jagernaut',
      'TimeZero',
      'Bumz',
      'Armored Warfare',
      'Ground War: Tanks',
      'Dragon Nest',
      'ODNOKLASSNIKI',
      'Bloody World',
      'Arche Age',
      'Moimir',
      'Legend Feo-Minor',
      'Varvary',
      'X craft',
      'Битва Титанов',
      'Tanki X',
      'Revelation',
      'MYProfile',
      'Gamenet',
      'Lineage 2',
      'Sparta',
    ];
    const options = providers.map((provider) => ({ value: provider, label: provider }));

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
