import { createRouter, createWebHashHistory } from 'vue-router';

import IndexPage from '@/pages/index/IndexPage.vue';
import PartnersPage from '@/pages/partners/PartnersPage.vue';
import AboutUsPage from '@/pages/about-us/AboutUsPage.vue';
import ContactsPage from '@/pages/contacts/ContactsPage.vue';

import FaqPage from '@/pages/faq/FaqPage.vue';
import GlossaryPage from '@/pages/glossary/GlossaryPage.vue';
import SignupPage from '@/pages/sign-up/SignupPage.vue';
import PaymentPage from '@/pages/payment/PaymentPage.vue';
import ApplicationFormPage from '@/pages/application/ApplicationForm/ApplicationFormPage.vue';
import NeededDocumentsPage from '@/pages/application/NeededDocuments/NeededDocuments.vue';
import MerchantsForm from '@/pages/application/MerchantsForm/MerchantsForm.vue';
import ApplicationCompleteForm from '@/pages/application/CompletePage/CompletePage.vue';

import PaymentsPage from '@/pages/solutions/payments/PaymentsSolutionsPage.vue';
import CreditCardPage from '@/pages/solutions/credit-card/CreditCardPage.vue';
import AcquiringPage from '@/pages/solutions/acquiring/AcquiringPage.vue';
import PaymentGatewayPage from '@/pages/solutions/payment-gateway/PaymentGatewayPage.vue';
import RecurringBillingPage from '@/pages/solutions/recurring-billing/ReccurringBillingPage.vue';
import MulticurrencyProcessing from '@/pages/solutions/multicurrency-processing/MulticurrencyProccessingPage.vue';
import ComingSoonPage from '@/pages/solutions/coming-soon/ComingSoonPage.vue';

export const pathes = {
  INDEX: '/',
  PARTNERS: '/partners',
  ABOUT_US: '/about-us',
  CONTACTS: '/contacts',
  PAYMENT: '/payment',
  ACCOUNT: '/account',
  FAQ: '/faq',
  GLOSSARY: '/glossary',
  payment: '/payment',

  ACCOUNT_APPLICATION_FORM: '/account/application',
  ACCOUNT_NEEDED_DOCUMENTS: '/account/needed-documents',
  ACCOUNT_MERCHANTS_FORM: '/account/merchants',
  ACCOUNT_COMPLETE_PAGE: '/account/complete',

  SOLUTION_PAYMENTS: '/solutions/payments',
  SOLUTION_CREDIT_CARD: '/solutions/credit-card',
  SOLUTION_ACQUIRING: '/solutions/acquiring-solutions',
  SOLUTION_PAYMENT_GATEWAY: '/solutions/payment-gateway',
  SOLUTION_RECURRING_BILLING: '/solutions/recurring-billing',
  SOLUTION_MULTICURRENCY_PROCESSING: '/solutions/multicurrency-processing',
  SOLUTION_COMING_SOON: '/solutions/coming-soon',
};

const routes = [
  { path: pathes.INDEX, component: IndexPage },
  { path: pathes.PARTNERS, component: PartnersPage },
  { path: pathes.ABOUT_US, component: AboutUsPage },
  { path: pathes.CONTACTS, component: ContactsPage },
  { path: pathes.FAQ, component: FaqPage },
  { path: pathes.GLOSSARY, component: GlossaryPage },
  { path: pathes.PAYMENT, component: PaymentPage },
  { path: pathes.ACCOUNT, component: SignupPage },
  { path: pathes.ACCOUNT_APPLICATION_FORM, component: ApplicationFormPage },
  { path: pathes.ACCOUNT_NEEDED_DOCUMENTS, component: NeededDocumentsPage },
  { path: pathes.ACCOUNT_MERCHANTS_FORM, component: MerchantsForm },
  { path: pathes.ACCOUNT_COMPLETE_PAGE, component: ApplicationCompleteForm },
  { path: pathes.SOLUTION_PAYMENTS, component: PaymentsPage },
  { path: pathes.SOLUTION_CREDIT_CARD, component: CreditCardPage },
  { path: pathes.SOLUTION_ACQUIRING, component: AcquiringPage },
  { path: pathes.SOLUTION_PAYMENT_GATEWAY, component: PaymentGatewayPage },
  { path: pathes.SOLUTION_RECURRING_BILLING, component: RecurringBillingPage },
  { path: pathes.SOLUTION_MULTICURRENCY_PROCESSING, component: MulticurrencyProcessing },
  { path: pathes.SOLUTION_COMING_SOON, component: ComingSoonPage },
];

export const menu = [
  { path: pathes.INDEX, title: 'Home' },
  {
    path: '',
    title: 'Solutions',
    children: [
      { path: pathes.SOLUTION_PAYMENTS, title: 'Payment Solutions System' },
      { path: pathes.SOLUTION_CREDIT_CARD, title: 'Credit Card Processing' },
      { path: pathes.SOLUTION_ACQUIRING, title: 'Internet Acquiring Solution' },
      { path: pathes.SOLUTION_PAYMENT_GATEWAY, title: 'Payment Gateway' },
      { path: pathes.SOLUTION_RECURRING_BILLING, title: 'Recurring Billing service' },
      { path: pathes.SOLUTION_MULTICURRENCY_PROCESSING, title: 'Multicurrency Processing' },
      { path: pathes.SOLUTION_COMING_SOON, title: 'Coming Soon' },
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

export const getSolutionsMenu = () => {
  return menu[1];
};

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
