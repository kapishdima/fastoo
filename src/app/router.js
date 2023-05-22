import { createRouter, createWebHashHistory } from 'vue-router';

import IndexPage from '@/pages/index/IndexPage.vue';
import PartnersPage from '@/pages/partners/PartnersPage.vue';
import AboutUsPage from '@/pages/about-us/AboutUsPage.vue';
import ContactsPage from '@/pages/contacts/ContactsPage.vue';
import PaymentsPage from '@/pages/payments/PaymentsSolutionsPage.vue';

export const pathes = {
  INDEX: '/',
  PARTNERS: '/partners',
  ABOUT_US: '/about-us',
  CONTACTS: '/contacts',
  SOLUTION_PAYMENTS: '/solutions/payments',
};

const routes = [
  { path: pathes.INDEX, component: IndexPage },
  { path: pathes.PARTNERS, component: PartnersPage },
  { path: pathes.ABOUT_US, component: AboutUsPage },
  { path: pathes.CONTACTS, component: ContactsPage },
  { path: pathes.SOLUTION_PAYMENTS, component: PaymentsPage },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
