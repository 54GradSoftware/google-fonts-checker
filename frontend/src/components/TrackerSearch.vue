<template>
  <div class="TrackerSearch">
    <div class="loading" v-if="loading">loading</div>
    <form v-else @submit.prevent="checkForTrackers(url)">
      <input type="text" v-model="url" placeholder="https://your.domain">
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
  loading.value = true;
  error.value = '';
  result.value = undefined;
  try {
    result.value = await api.site(url);
    localStorage.setItem('lastUrl', url);
    loading.value = false;
  }catch (e) {
    error.value = 'failed to resolve';
    loading.value = false;
  }
}
</script>

<style scoped lang="scss">
  .TrackerSearch{
    width: 100%;
    form{
      display: flex;
      width: 100%;
      box-shadow: #aaaa 2px 2px 4px;
      border-radius: .5rem;
      align-items: center;
      max-width: 40rem;
      margin: 1rem;
      input{
        padding: 1rem;
        border: 1px #aaa solid;
        border-radius: .5rem 0 0 .5rem;
        flex-grow: 1;
      }
      button{
        padding: 1rem;
        background-color: #157aec;
        border: 1px #157aec solid;
        color: #fff;
        border-radius: 0 .5rem .5rem 0;
        flex-grow: 1;
        max-width: 8rem;
        cursor: pointer;
      }
    }
  }
</style>