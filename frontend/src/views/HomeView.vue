<template>
  <div class="home">
    <div class="wrapper">
      <div class="content">
        <div class="top">
          <div class="search">
            <h1>Check your site for Google Fonts:</h1>
            <TrackerSearch  @result="res=>result=res"/>
          </div>
        </div>
        <TracingResult v-if="result" :result="result"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import TrackerSearch from '@/components/TrackerSearch.vue';
import TracingResult from '@/components/TracingResult.vue';

const result = ref(undefined);
</script>

<style scoped lang="scss">
  .home{
    width: 100%;
    margin-top: 4rem;
    .wrapper{
      width: 100%;
      display: flex;
      justify-content: center;
      .content{
        width: 100%;
        padding: 1rem;
        max-width: 60rem;
        min-height: 100%;
        .top{
          position: relative;
          display: block;
          height: calc(100vh - 24rem);
          min-height: 28rem;
          .search{
            h1{
              text-align: center;
            }
            position: sticky;
            top: calc(50% - 8rem);
          }
        }
      }
    }
  }
</style>