import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import { createI18n }  from 'vue-i18n';
import { messages } from './languages';
import { VuePlausible } from 'vue-plausible';

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
  .use(
    (vue, options) => VuePlausible({ prototype: {}, ...vue }, options), // getter to compensate https://github.com/moritzsternemann/vue-plausible/issues/16
    {
      domain: 'checker.illusion-factory.de',
      enableAutoPageviews: true,
      trackLocalhost: false,
      apiHost: 'https://plausible.io',
    },
  )
  .mount('#app');
