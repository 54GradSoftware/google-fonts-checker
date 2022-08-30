import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { createI18n }  from 'vue-i18n';
import { messages } from './languages';

export const i18n = createI18n({
  fallbackLocale: {
    'en': ['en-US'],
    'en-UK': ['en-US'],
    'de': ['de-DE'],
    default: 'de-DE',
  },
  messages,
  allowComposition: true,
  mode: 'composition',
});

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app');
