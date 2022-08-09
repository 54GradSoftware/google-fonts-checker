import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { createI18n }  from 'vue-i18n';
import { messages } from '../languages';

export const i18n = createI18n({
  fallbackLocale: {
    'en-US': ['en'],
    'en-UK': ['en'],
    'de-DE': ['de'],
    default: 'de',
  },
  messages,
  allowComposition: true,
  mode: 'composition',
});

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app');
