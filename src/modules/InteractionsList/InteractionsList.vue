<template>
  <card-list :list="interactionCards">
    <template #item="{ item, index }">
      <interaction-card
        :index="item.index"
        :title="$t(item.title)"
        :subtitle="$t(item.subtitle)"
        :icon="item.icon"
        v-if="index !== 0"
      />
      <interaction-card
        :index="item.index"
        :title="$t(item.title)"
        :subtitle="$t(item.subtitle)"
        v-if="index === 0"
      >
        <template #extra>
          <v-form :subtitle="$t('Submit application')">
            <template #fields>
              <form-field :label="$t('Your number')">
                <tel-input />
              </form-field>

              <form-field :label="$t('Email')">
                <input-field />
              </form-field>

              <div class="form-actions">
                <form-button>{{ $t('Send Message') }}</form-button>
              </div>
            </template>
          </v-form>
        </template>
      </interaction-card>
    </template>
  </card-list>
</template>

<script>
import CardList from '@/components/cards/CardList.vue';
import InteractionCard from '@/components/cards/InteractionCard.vue';

import VForm from '@/components/form/VForm.vue';
import FormField from '@/components/fields/FormField.vue';
import TelInput from '@/components/fields/TelInput.vue';
import InputField from '@/components/fields/InputField.vue';

import FormButton from '@/components/button/FormButton.vue';

export default {
  components: {
    CardList,
    InteractionCard,
    VForm,
    FormField,
    TelInput,
    InputField,
    FormButton,
  },
  setup() {
    const interactionCards = [
      { index: '1', title: 'Application', subtitle: 'Submit your application' },
      {
        index: '2',
        title: 'Documents',
        subtitle: 'To provide all documents',
        icon: require('@/assets/icons/interaction/interaction-icon-1.svg'),
      },
      {
        index: '3',
        title: 'Contract',
        subtitle: 'To sign a contract',
        icon: require('@/assets/icons/interaction/interaction-icon-2.svg'),
      },
      {
        index: '4',
        title: 'Integration',
        subtitle: 'To make tech. integration',
        icon: require('@/assets/icons/interaction/interaction-icon-3.svg'),
      },
    ];

    return { interactionCards };
  },
};
</script>

<style lang="scss" scoped></style>
