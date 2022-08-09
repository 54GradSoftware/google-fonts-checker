<template>
  <div class="home">
    <div class="wrapper">
      <div class="content">
        <div class="topWrapper">
          <div class="top">
            <div class="search">
              <h1>{{ $t('search.headline') }}</h1>
              <TrackerSearch  @result="res=>result=res"/>
              <ScrollToAnchor v-if="result === undefined" class="linkToWhyNotToUse" to="WhyNotToUse">
                <b>{{ $t('search.whyNotToUse') }}</b>
                <div class="arrow">&#8675;</div>
              </ScrollToAnchor>
            </div>
          </div>
          <TracingResult v-if="result" :result="result"/>
        </div>
        <WhyNotToUse/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import TrackerSearch from '@/components/TrackerSearch.vue';
import TracingResult from '@/components/TracingResult.vue';
import WhyNotToUse from '@/components/WhyNotToUse.vue';
import ScrollToAnchor from '@/components/ScrollToAnchor.vue';

const result = ref(undefined);
</script>

<style scoped lang="scss">
  .home{
    width: 100%;
    margin-top: 8rem;
    .wrapper{
      width: 100%;
      display: flex;
      justify-content: center;
      .content{
        width: 100%;
        padding: 1.5rem;
        max-width: 60rem;
        min-height: 100%;
        .topWrapper{
          min-height: calc(100vh - 4rem);
          margin-bottom: 4rem;
          .top{
            position: relative;
            display: block;
            height: calc(100vh - 4rem);
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
        .linkToWhyNotToUse{
          margin-top: 4rem;
          text-align: center;
          cursor: pointer;
          color: #000;
          text-decoration: none;
          display: block;
          .arrow{
            margin-top: 2rem;
            font-size: 4rem;
            color: #444;
          }
        }
      }
    }
  }
</style>