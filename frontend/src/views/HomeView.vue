<template>
  <div class="home">
    <div class="wrapper">
      <div class="content">
        <div class="search">
          <h1>{{ $t('search.headline') }}</h1>
          <h2 v-html="$t('search.oneOfOurServices')"></h2>
          <TrackerSearch   ref="trackerSearchComponent" @result="res=>result=res"/>
          <p v-if="!loading">
            <span>{{ $t('search.freeAndNoRegistration') }}</span>
            {{ $t('search.getResultInstantly') }}
          </p>
        </div>
        <TracingResult v-if="result" :result="result"/>
        <AboutTheProject/>
        <WhyNotToUse/>
        <DisplayTimeline/>
        <FAQ/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import TrackerSearch from '@/components/TrackerSearch.vue';
import TracingResult from '@/components/TracingResult.vue';
import WhyNotToUse from '@/components/WhyNotToUse.vue';
import AboutTheProject from '@/components/AboutTheProject.vue';
import DisplayTimeline from '@/components/DisplayTimeline.vue';
import FAQ from '@/components/FAQ.vue';

const result = ref(undefined);
const trackerSearchComponent = ref(null);
const loading = computed(() => trackerSearchComponent.value?.loading ?? false);
</script>

<style scoped lang="scss">
  .home {
    width: 100%;
    margin-top: 8rem;

    .wrapper {
      width: 100%;
      display: flex;
      justify-content: center;

      .content {
        width: 100%;
        padding: 1.5rem;
        max-width: 60rem;
        min-height: 100%;

        .search {
          top: calc(50% - 8rem);
          text-align: center;

          h1 {
            text-align: center;
          }

          // not b element
          h2 {
            text-align: center;
            font-weight: normal;
          }

          p span {
            color: #B72956;
            font-weight: 700;
          }
        }
        .linkToWhyNotToUse {
          margin-top: 4rem;
          text-align: center;
          cursor: pointer;
          color: #000;
          text-decoration: none;
          display: block;

          .arrow {
            margin-top: 2rem;
            font-size: 4rem;
            color: #444;
          }
        }
      }
    }
  }
</style>