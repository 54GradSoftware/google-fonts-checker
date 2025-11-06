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
        path: '/de-DE', name: 'home', component: HomeView
    }, {
        path: '/success', name: 'successDE', component: SuccessView
    }, {
        path: '/', redirect: () => ({ path: '/de-DE' })
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
