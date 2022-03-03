<template>
  <div class="home">
    <h1>check your site for trackers</h1>
    <div class="loading" v-if="loading">loading</div>
    <form v-else @submit.prevent="checkForTrackers(url)">
      <div>
        <input type="text" v-model="url" placeholder="https://your.domain">
      </div>
      <button type="submit">send</button>
    </form>
    <TracingResult v-if="result" :result="result"/>
    <div class="error" v-if="error">{{error}}</div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {API} from '@/lib/API';
import validUrl from 'valid-url';
import TracingResult from '@/components/TracingResult.vue';

const url = ref(localStorage.getItem('lastUrl')??'')
const error = ref(undefined)
const result = ref(undefined);
const loading = ref(false);

const api = new API({});
const checkForTrackers = async url => {
  if (!validUrl.isUri(url)) {
    console.error('invalid url');
    error.value = 'invalid url';
    return;
  }
  try {
    loading.value = true;
    result.value = await api.site(url);
    localStorage.setItem('lastUrl', url);
    loading.value = false;
  }catch (e) {
    error.value = 'failed to resolve';
    loading.value = true;
  }
}
</script>
