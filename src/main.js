import { createApp } from 'vue';
import App from './App.vue';

import { createI18n } from 'vue-i18n';
import { router } from '@/app/router';

import en from '@/locales/en.json';
import ge from '@/locales/ge.json';
import ru from '@/locales/ru.json';

const messages = {
  en: en,
  ge: ge,
  ru: {
    message: ru,
  },
};

const i18n = createI18n({
  locale: window.localStorage.getItem('locale') || 'gu', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');
