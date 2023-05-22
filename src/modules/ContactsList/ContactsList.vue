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
        value: '555 Burrard <br/> StVancouver,BC V7X <br/> 1M8,CanadaOffice 02-125',
      },
      {
        icon: require('@/assets/icons/contacts/contact-icon.svg'),
        title: 'Contact',
        value:
          '<a style="color: inherit; text-decoration: none;" href="tel:+1 (778) 401-7776">+1 (778) 401-7776</a> <br/> <a  style="color: inherit; text-decoration: none;" href="mailto:assistance@magua-pay.com">assistance@magua-pay.com</a>',
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
