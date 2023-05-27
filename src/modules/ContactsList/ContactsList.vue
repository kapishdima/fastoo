<template>
  <card-list :list="contactsList">
    <template #item="{ item }">
      <contact-card :icon="item.icon" :title="item.title" :value="item.value" />
    </template>
  </card-list>
</template>

<script>
import CardList from '@/components/cards/CardList.vue';
import ContactCard from '@/components/cards/ContactCard.vue';

export default {
  components: {
    CardList,
    ContactCard,
  },
  setup() {
    const contactsList = [
      {
        icon: require('@/assets/icons/contacts/office-icon.svg'),
        title: 'Office',
        value: '12 M.Aleksidze str., floor 14, <br/> Office space №46, <br/> Tbilisi, Georgia',
      },
      {
        icon: require('@/assets/icons/contacts/contact-icon.svg'),
        title: 'Contact',
        value:
          '<a href="tel:+995 591 06 55 93" style="color: inherit; text-decoration: none;">+995 591 06 55 93</a>',
      },
      {
        icon: require('@/assets/icons/contacts/clock-icon.svg'),
        title: 'Open hours',
        value: `
            Mon–Fri: 8 AM - 9 PM <br/>
            Saturday: 8 AM - 8 PM <br/>
            Sunday: 8 AM - 5 PM <br/>
        `,
      },
    ];

    return {
      contactsList,
    };
  },
};
</script>

<style lang="scss" scoped></style>
