import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    redirect: () => ({ path: `/${ navigator.language || navigator.userLanguage || 'de-DE' }` })
  },
  {
    path: '/:locale/',
    name: 'home',
    component: HomeView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
