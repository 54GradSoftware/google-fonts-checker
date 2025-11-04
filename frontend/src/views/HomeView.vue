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
        <WebradarCTA/>
        <AboutTheProject/>
        <WhyNotToUse/>
        <HowToUseGoogleFonts/>
        <MoreRulesForWebsites/>
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
import FAQ from '@/components/FAQ.vue';
import WebradarCTA from '@/components/WebradarCTA.vue';
import HowToUseGoogleFonts from '@/components/HowToUseGoogleFonts.vue';
import MoreRulesForWebsites from '@/components/MoreRulesForWebsites.vue';

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
        max-width: 90vw;
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

  @media (max-width: 768px) {
    .home {
      margin-top: 4rem;
    }

    .wrapper .content {
      padding: 1rem;
      max-width: 100vw;
      margin: 0;
    }
  }
</style>