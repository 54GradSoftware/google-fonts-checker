import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SuccessView from '../views/SuccessView.vue';

const routes = [/*
  {
    path: '/',
    redirect: () => ({ path: `/${ navigator.language || navigator.userLanguage || 'de-DE' }` })
  },
    */
    {
        path: '/', name: 'home', component: HomeView
    }, {
        path: '/success', name: 'successDE', component: SuccessView
    }, {
        path: '/:pathMatch(.*)*', name: 'notfound', redirect: '/'
    }];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
