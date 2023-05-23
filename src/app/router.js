import { createRouter, createWebHashHistory } from 'vue-router';

import IndexPage from '@/pages/index/IndexPage.vue';
import PartnersPage from '@/pages/partners/PartnersPage.vue';
import AboutUsPage from '@/pages/about-us/AboutUsPage.vue';
import ContactsPage from '@/pages/contacts/ContactsPage.vue';
import PaymentsPage from '@/pages/payments/PaymentsSolutionsPage.vue';
import CreditCardPage from '@/pages/credit-card/CreditCardPage.vue';
import FaqPage from '@/pages/faq/FaqPage.vue';
import GlossaryPage from '@/pages/glossary/GlossaryPage.vue';

export const pathes = {
  INDEX: '/',
  PARTNERS: '/partners',
  ABOUT_US: '/about-us',
  CONTACTS: '/contacts',
  PAYMENT: '/payment',
  ACCOUNT: '/account',
  FAQ: '/faq',
  GLOSSARY: '/glossary',
  SOLUTION_PAYMENTS: '/solutions/payments',
  SOLUTION_CREDIT_CARD: '/solutions/credit-card',
};

const routes = [
  { path: pathes.INDEX, component: IndexPage },
  { path: pathes.PARTNERS, component: PartnersPage },
  { path: pathes.ABOUT_US, component: AboutUsPage },
  { path: pathes.CONTACTS, component: ContactsPage },
  { path: pathes.FAQ, component: FaqPage },
  { path: pathes.GLOSSARY, component: GlossaryPage },
  { path: pathes.PAYMENT, component: ContactsPage },
  { path: pathes.ACCOUNT, component: ContactsPage },
  { path: pathes.SOLUTION_PAYMENTS, component: PaymentsPage },
  { path: pathes.SOLUTION_CREDIT_CARD, component: CreditCardPage },
];

export const menu = [
  { path: pathes.INDEX, title: 'Home' },
  {
    path: '',
    title: 'Solutions',
    children: [
      { path: pathes.SOLUTION_PAYMENTS, title: 'Payment Solutions System' },
      { path: pathes.SOLUTION_CREDIT_CARD, title: 'Credit Card Processing' },
      { path: pathes.SOLUTION_PAYMENTS, title: 'Internet Acquiring Solution' },
      { path: pathes.SOLUTION_PAYMENTS, title: 'Payment Gateway' },
      { path: pathes.SOLUTION_PAYMENTS, title: 'Recurring Billing service' },
      { path: pathes.SOLUTION_PAYMENTS, title: 'Multicurrency Processing' },
    ],
  },
  { path: pathes.PARTNERS, title: 'Partners' },
  {
    path: '',
    title: 'Knowledge Base',
    children: [
      { path: pathes.FAQ, title: 'FAQ' },
      { path: pathes.GLOSSARY, title: 'Glossary' },
    ],
  },
  { path: pathes.ABOUT_US, title: 'About Us' },
  { path: pathes.CONTACTS, title: 'Contact Us' },
  { path: pathes.PAYMENT, title: 'Payment' },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
