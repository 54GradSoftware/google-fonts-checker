<template>
  <div class="TracingResult">
    <div class="title">Tracing Result</div>
    <div class="trackerList" v-if="result.trackers?.length">
      <b>found trackers:</b>
      <div class="tracker" v-for="tracker in result.trackers" :key="tracker">
        <div class="name" @click="tracker.showDetails = !tracker.showDetails">{{tracker.name}}</div>
        <div class="details" v-if="tracker.showDetails">
          <div>found in:</div>
          <div class="requestList">
            <div class="request" v-for="request in tracker.matches" :key="request">
              <div class="method">{{request.method}}</div>
              <div class="url">{{request.url}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>no trackers found :)</div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
defineProps({
  result: Object
});

</script>

<style scoped lang="scss">
.TracingResult{
  margin: 1rem;
  .title{
    font-size: 1.2rem;
    font-weight: bold;
  }
  .trackerList{
    .tracker{
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
          .request{
            background-color: #eee;
            padding: 1rem;
            display: flex;
            &:nth-child(even){
              background-color: #ccc;
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