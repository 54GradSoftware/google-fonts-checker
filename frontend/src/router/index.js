import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { i18n } from "@/main";

const routes = [
  {
    path: '/',
    redirect: () => ({ path: `/${ i18n.global.locale }` })
  },
  {
    path: '/:locale/',
    name: 'home',
    component: HomeView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
