<template>
  <div class="home">
    <h1>check your site for trackers</h1>
    <input type="text" v-model="url">
    <button @click="checkForTrackers(url)">send</button>
    {{result}}
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {API} from '@/lib/API';
import validUrl from 'valid-url';

const url = ref('https://54gradsoftware.de')
const api = new API({});

const result = ref({});
const checkForTrackers = async url => {
  if (!validUrl.isUri(url)) {
    console.error('invalid url');
    return;
  }
  result.value = await api.site(url);
}
</script>
