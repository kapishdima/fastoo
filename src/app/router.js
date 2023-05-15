import { createRouter, createWebHashHistory } from 'vue-router';
import IndexPage from '@/pages/IndexPage.vue';

export const pathes = {
  INDEX: '/',
};

const routes = [{ path: pathes.INDEX, component: IndexPage }];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
