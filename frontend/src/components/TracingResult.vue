<template>
  <div class="TracingResult">
    <h2 class="title" ref="tracingResult">Ergebnis:</h2>
    <b>{{result.url}}</b>
    <div class="trackerList" v-if="result.trackers?.length">
      <h3>Google Fonts wurde erkannt!</h3>
      <div class="tracker" v-for="tracker in result.trackers" :key="tracker">
        <div class="name" @click="tracker.showDetails = !tracker.showDetails">{{tracker.name}}</div>
        <div class="details" v-if="tracker.showDetails">
          <TrackerInfoWrapper :tracker="tracker"/>
          <b>Gefunden in den folgenden Anfragen:</b>
          <div class="requestList">
            <div class="request" v-for="request in tracker.matches" :key="request">
              <div class="method">{{request.method}}</div>
              <div class="url">{{request.url}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-else>Wir haben keine externe Nutzung von Google Fonts erkannt :D</p>
    <h3>Ergebnis teilen:</h3>
    <div class="share">
      <div class="url">{{urlToShare}}</div>
      <button @click="copy(urlToShare)">URL&nbsp;kopieren</button>
    </div>
  </div>
</template>

<script setup>
import {defineProps, onMounted, ref} from 'vue';
import TrackerInfoWrapper from '@/components/TrackerInfoWrapper.vue'

const props = defineProps({
  result: Object
});

const tracingResult = ref(null);
const urlToShare = ref(`${window.location.protocol}//${window.location.host}?url=${props.result.url}`);

const copy = text => navigator.clipboard.writeText(text);

onMounted(() => tracingResult.value.scrollIntoView({block: 'center', behavior: 'smooth'}));
</script>

<style scoped lang="scss">
.TracingResult{
  text-align: center;
  .trackerList{
    .tracker{
      text-align: left;
      border: 1px #aaa solid;
      border-radius: .5rem;
      overflow: hidden;
      margin-top: .5rem;
      .name{
        width: 100%;
        background-color: #eee;
        padding: 1rem;
        box-sizing: border-box;
        font-weight: bold;
        cursor: pointer;
        &:nth-child(even){
          background-color: #ccc;
        }
      }
      .details{
        padding: 1rem;
        .requestList{
          border: 1px #aaa solid;
          border-radius: .5rem;
          overflow: hidden;
          margin-top: 1rem;
          .request{
            background-color: #eee;
            padding: 1rem;
            display: flex;
            &:nth-child(even){
              background-color: #ddd;
            }
            .method{
              font-weight: bold;
              margin: 0 1rem;
            }
            .url{
              word-break: break-word;
            }
          }
        }
      }
    }
  }
  .share{
    display: flex;
    .url{
      border: #aaa 1px solid;
      padding: 1rem;
      flex-grow: 1;
      border-radius: 0.5rem 0 0 0.5rem;

    }
    button{
      padding: 1rem;
      background-color: #157aec;
      border: 1px #157aec solid;
      color: #fff;
      border-radius: 0 0.5rem 0.5rem 0;
      flex-grow: 1;
      max-width: 8rem;
      cursor: pointer;
    }
  }
}
</style>