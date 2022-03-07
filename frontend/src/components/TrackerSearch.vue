<template>
  <div class="TrackerSearch">
    <div class="loading" v-if="loading">
      <ThrobberLoading :info="loading"/>
    </div>
    <form v-else @submit.prevent="checkForTrackers(url)">
      <input type="text" v-model="url" placeholder="https://deine.domain">
      <button type="submit">send</button>
    </form>
  </div>
  <div class="error" v-if="error">{{error}}</div>
</template>

<script setup>
import {ref, defineEmits} from 'vue';
import {API} from '@/lib/API';
import validUrl from 'valid-url';
import ThrobberLoading from '@/components/ThrobberLoading.vue';

const emit = defineEmits({
  result: null
});

const url = ref(localStorage.getItem('lastUrl')??'')
const error = ref(undefined)
const result = ref(undefined);
const loading = ref('');

const api = new API({});
const checkForTrackers = async url => {
  if (!validUrl.isUri(url)) {
    console.error('invalid url');
    error.value = 'invalid url';
    return;
  }
  loading.value = 'loading';
  error.value = '';
  result.value = undefined;
  emit('result', undefined);
  try {
    result.value = await api.site(url, ['trackers'], res => {
      if (res?.status === 102) loading.value = res.message ?? 'loading';
    });
    localStorage.setItem('lastUrl', url);
    emit('result', result.value);
    loading.value = '';
  }catch (e) {
    error.value = 'failed to resolve';
    loading.value = '';
  }
}
</script>

<style scoped lang="scss">
  .TrackerSearch{
    width: 100%;
    display: flex;
    justify-content: center;
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
  .error{
    text-align: center;
    color: #be1414;
  }
</style>