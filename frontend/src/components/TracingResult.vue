<template>
  <div class="TracingResult">
    <h2 class="title">Ergebniss:</h2>
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
    <div v-else>Wir haben keine externe keine Nutzung von Google Fonts erkannt :D</div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
import TrackerInfoWrapper from '@/components/TrackerInfoWrapper.vue'

defineProps({
  result: Object
});

</script>

<style scoped lang="scss">
.TracingResult{
  margin: 1rem;
  text-align: center;
  .trackerList{
    .tracker{
      text-align: left;
      border: 1px #aaa solid;
      border-radius: .5rem;
      overflow: hidden;
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
}
</style>