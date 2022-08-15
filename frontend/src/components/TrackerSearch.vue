<template>
  <div class="TrackerSearch">
    <div class="loading" v-if="loading">
      <ThrobberLoading :info="loading"/>
    </div>
    <form v-else @submit.prevent="checkForTrackers(url, email)">
      <div class="EnterUrl">
        <input type="text" v-model="url" placeholder="https://deine.domain">
        <button type="submit">Start</button>
      </div>
      <div class="EnterEmail">
        <label>Bitte geben Sie Ihre E-Mail-Adresse ein:</label>
        <input type="email" required v-model="email" class="email-input">
      </div>
      <div class="checkbox-dsgvo">
          <input type="checkbox" required v-model="checked" id="checkbox-dsgvo-input"> <label for="checkbox-dsgvo-input">Ja, ich möchte gerne das Ergebnis der Überprüfung per Mail erhalten. Wir nutzen verschlüsselte E-Mail-Kommunikation, um Ihre Privatsphäre zu gewährleisten. Ein Service der IllusionFACTORY KG, Max-Planck-Straße 15, 53819 Neunkirchen-Seelscheid. Wir speichern Ihre Mailadresse und dürfen Sie als Gegenleistung für diesen Service mit Angeboten zu Websites und Online-Marketing kontaktieren. Ihre Rechte gemäß DSGVO sind unbenommen. Für das Prüfungsergebnis übernehmen wir keine Haftung. Unsere Datenschutzerklärung finden Sie unter <a href="https://www.illusion-factory.de/datenschutz.html" target="_blank">https://www.illusion-factory.de/datenschutz.html</a>.</label>
      </div>
    </form>
  </div>
  <div class="error" v-if="error">{{error}}</div>
</template>

<script setup>
import {ref, defineEmits, onMounted} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import {API} from '@/lib/API';
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
const loading = ref('');
const email = ref('');
const checked = ref('');

const api = new API({});
const checkForTrackers = async (url, email) => {
  if (!url.match(/^http:\/\/|^https:\/\//)) url = url.replace(/^[a-zA-Z]+:\/\/|^/, 'https://');
  if (!validUrl.isWebUri(url)) {
    console.error('invalid url');
    error.value = 'invalid url';
    return;
  }
  loading.value = 'loading';
  error.value = '';
  result.value = undefined;
  emit('result', undefined);
  try {
    console.log('Sending with email', email);
    result.value = await api.site(url, email,['trackers'], res => {
      if (res?.status === 102) loading.value = res.message ?? 'loading';
    });
    localStorage.setItem('lastUrl', url);
    emit('result', result.value);
    loading.value = '';
    router.push(`?url=${result.value.url}`);
  }catch (e) {
    error.value = 'failed to resolve';
    loading.value = '';
  }
}

onMounted(()=>{
  if (route.query?.url && validUrl.isWebUri(route.query?.url)) url.value = route.query.url;
});
</script>

<style scoped lang="scss">
    .EnterEmail {
        label {
            display:block;
        }
        input {
            padding: 1rem;
            border: 1px #aaa solid;
            border-radius: .5rem;
            box-shadow: #aaaa 2px 2px 4px;
            width:250px;
            margin: 1rem;
        }
    }
    .checkbox-dsgvo {
        font-size:11px;
        margin: 0 auto;
    }
  .TrackerSearch{
    max-width: 500px;
    display: flex;
    justify-content: center;
    margin:0 auto;
    text-align:center;
  }
  .EnterUrl {
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
  .error{
    text-align: center;
    color: #be1414;
  }
</style>
