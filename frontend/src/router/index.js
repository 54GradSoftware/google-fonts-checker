import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SuccessView from '../views/SuccessView.vue';

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
  {
    path: '/:locale/success',
    name: 'successDE',
    component: SuccessView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
