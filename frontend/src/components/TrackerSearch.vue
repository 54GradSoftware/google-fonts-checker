<template>
  <div class="TrackerSearch" id="GoogleFontsCheck">
    <div class="loading" v-if="loading">
      <ThrobberLoading/>
    </div>
    <form v-else @submit.prevent="checkForTrackers(url)">
      <label class="visually-hidden" for="urlInput">{{$t('search.label')}}</label>
      <input type="text" v-model="url" :placeholder="$t('search.placeholder')" id="urlInput">
      <button type="submit">{{$t('search.button')}}</button>
    </form>
  </div>
  <div class="error" v-if="error">{{error}}</div>
</template>

<script setup>
import {ref, defineEmits, onMounted, defineExpose} from 'vue';
import {useRouter, useRoute} from 'vue-router';
//import {API} from '@/lib/API';
import validUrl from 'valid-url';
import ThrobberLoading from '@/components/ThrobberLoading.vue';

const emit = defineEmits({
  result: null
});
const router = useRouter();
const route = useRoute();

const url = ref(localStorage.getItem('lastUrl')??'')
const error = ref(undefined)
const result = ref(undefined);
const loading = ref(false);

//const api = new API({});

const checkForTrackers = async url => {
  if (!url.match(/^http:\/\/|^https:\/\//)) url = url.replace(/^[a-zA-Z]+:\/\/|^/, 'https://');
  if (!validUrl.isWebUri(url)) {
    console.error('invalid url');
    error.value = 'invalid url';
    return;
  }
  loading.value = true;
  error.value = '';
  result.value = undefined;
  emit('result', undefined);
  try {
    result.value = {"url":"https://accaii.com",
      "trackers":[
          {"slug": "google-fonts", "url": "https://fonts.google.com/", "showDetails": true, "name": "Google Fonts", "matches": [{"method": "GET", "url": "https://fonts.gstatic.com/s/googlesansflex/v5/t5s6IQcYNIWbFgDgAAzZ34auoVyXkJCOvp3SFWJbN5hF8Ju1x5tKByN2l9sI40swNJwakXdYAZzz0jbnJ4qFQO5tGjLvDSkV4DyKMo6qQzwliVdHySgxyRg2.woff2"}, {"method": "GET", "url": "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&v=1762272563174"}, {"method": "GET", "url": "https://fonts.gstatic.com/s/materialsymbolsoutlined/v292/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2"}]},
          {"slug":"google-recaptcha","url":"https://developers.google.com/recaptcha/","showDetails":true,"name":"Google reCAPTCHA","matches":[{"method":"GET","url":"https://www.google.com/recaptcha/api.js"}, {"method":"GET","url":"https://www.gstatic.com/recaptcha/releases/cLm1zuaUXPLFw7nzKiQTH1dX/recaptcha__en.js"},{"method":"GET","url":"https://www.gstatic.com/recaptcha/releases/cLm1zuaUXPLFw7nzKiQTH1dX/styles__ltr.css"},{"method":"GET","url":"https://www.gstatic.com/recaptcha/releases/cLm1zuaUXPLFw7nzKiQTH1dX/recaptcha__en.js"},{"method":"GET","url":"https://www.gstatic.com/recaptcha/releases/cLm1zuaUXPLFw7nzKiQTH1dX/recaptcha__en.js"},{"method":"GET","url":"https://www.gstatic.com/recaptcha/releases/cLm1zuaUXPLFw7nzKiQTH1dX/styles__ltr.css"},{"method":"GET","url":"https://www.gstatic.com/recaptcha/releases/cLm1zuaUXPLFw7nzKiQTH1dX/recaptcha__en.js"}]}
      ],"trackersNotLoaded":[]}


    console.log(JSON.stringify(result.value));
    localStorage.setItem('lastUrl', url);
    emit('result', result.value);
    router.push(`?url=${result.value.url}`);

  }
  catch (e) {
    error.value = 'failed to resolve';
  }

  loading.value = false;
}

onMounted(()=>{
  if (route.query?.url && validUrl.isWebUri(route.query?.url)) url.value = route.query.url;
});

defineExpose({
  loading
});
</script>

<style scoped lang="scss">
  .TrackerSearch {
    width: 100%;
    display: flex;
    justify-content: center;

    form {
      display: flex;
      align-items: center;
      width: 100%;
      border-radius: 5px;
      max-width: 40rem;
      margin: 1rem;

      input {
        font-size: 16px;
        padding: .825rem;
        border: 2px #DADADA solid;
        border-radius: 5px 0 0 5px;
        flex-grow: 1;
      }

      button {
        padding: .75rem;
        background-color: #377FCC;
        border: 1px #377FCC solid;
        color: #fff;
        border-radius: 0 5px 5px 0;
        flex-grow: 1;
        width: max-content;
        font-size: 20px;
        min-width: max-content;
        max-width: max-content;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }

  .error {
    text-align: center;
    color: #be1414;
  }
</style>