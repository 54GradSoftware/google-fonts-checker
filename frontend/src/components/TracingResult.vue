<template>
  <div>
    <p>Tracing Result</p>
    <div class="trackerList" v-if="result.trackers?.length">
      <b>found trackers:</b>
      <div class="tracker" v-for="tracker in result.trackers" :key="tracker">
        <div class="name">{{tracker.name}}</div>
        <div>found in:</div>
        <div class="requestList">
          <div class="request" v-for="request in tracker.matches" :key="request">
            <div class="method">{{request.method}}</div>
            <div class="url">{{request.url}}</div>
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

<style scoped>

</style>