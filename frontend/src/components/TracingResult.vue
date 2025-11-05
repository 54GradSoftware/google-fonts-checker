<template>
  <div class="TracingResult">
    <h2 class="title" ref="tracingResult">{{ $t('result.headline') }}</h2>
    <h3 class="searched-url">{{result.url}}</h3>

    <div class="trackerList card">
      <template v-if="result.trackers?.length">
        <div class="headline-wrapper">
          <img src="@/assets/icons/cancelCircle.svg" alt="">
          <h2>{{ $t('result.noticeTrue') }}</h2>
        </div>

        <div class="tracker" v-for="tracker in result.trackers" :key="tracker">
          <TrackerInfoWrapper :tracker="tracker" class="details">
            <div class="requestList">
              <div class="request" v-for="request in tracker.matches" :key="request">
                <div class="method">{{ request.method }}</div>
                <div class="url">{{ request.url }}</div>
              </div>
            </div>
          </TrackerInfoWrapper>
        </div>
      </template>

      <template v-if="result.trackersNotLoaded?.length">
        <div class="headline-wrapper">
          <img src="@/assets/icons/cancelCircle.svg" alt="">
          <div>
            <h2>{{ $t('result.noticeTrueNotLoaded') }}</h2>
            <p>{{ $t('result.noticeTrueNotLoadedInfo') }}</p>
          </div>
        </div>

        <div class="tracker" v-for="tracker in result.trackersNotLoaded" :key="tracker">
          <TrackerInfoWrapper :tracker="tracker" class="details">
            <div class="requestList">
              <div class="request" v-for="request in tracker.matches" :key="request">
                <div class="method">{{ request.method }}</div>
                <div class="url">{{ request.url }}</div>
              </div>
            </div>
          </TrackerInfoWrapper>
        </div>
      </template>

      <template v-if="!(result.trackers?.length || result.trackersNotLoaded?.length)">
        <div class="headline-wrapper">
          <img src="@/assets/icons/checkmarkCircle.svg" alt="">
          <h2>{{ $t('result.noticeFalse') }}</h2>
        </div>

        <div class="text">
          <p>
            Alles im grünen Bereich – auf dieser Seite wurden keine extern eingebundenen Google Fonts gefunden.
          </p>
          <p>
            Wenn Google Fonts extern eingebunden sind, laden diese standardmäßig von der Google CDN.
            Dabei werden Daten wie die IP-Adresse oder die aufgerufene Website übermittelt.
            Dadurch verstößt die Nutzung von Google Fonts je nach Anwendungsfall meist gegen die DSGVO.
            <a>Mehr erfahren »</a>
          </p>
          <p>
            <b>Hinweis:</b> Unsere Prüfung analysiert nur die eingegebene URL, nicht die gesamte Domain. Bereits eine einzelne Einbindung auf einer Unterseite kann datenschutzrechtlich relevant sein. Prüfe daher möglichst alle Unterseiten deiner Domain.
          </p>
        </div>
      </template>

      <h3 class="headline">{{ $t('result.copy.headline') }}</h3>
      <p class="text-share">
        Der Link enthält die von dir geprüfte URL und öffnet den Google Fonts Checker mit dieser Adresse vorausgefüllt.
        Deine Ergebnisse werden aus Datenschutzgründen nicht von uns gespeichert.
      </p>
      <div class="share">
        <div class="url">{{ urlToShare }}</div>
        <button @click="copy(urlToShare)">
          {{ $t('result.copy.button') }}
          <img src="@/assets/icons/copy.svg" alt="copy" />
        </button>
      </div>

      <h3 class="headline">{{ $t('result.more.headline') }}</h3>
      <p class="text-more">
        Einzelne Unterseiten manuell prüfen ist mühsam – insbesondere bei großen Webanwendungen.
        Wenn du nicht nur einzelne Seiten, sondern bequem deine ganze Webseite im Blick behalten willst,
        schau doch mal bei webrad.ar vorbei.
      </p>

      <div class="arrow">
        <span></span>
        <span></span>
        <span></span>
        <div class="down"></div>
      </div>

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
.TracingResult {
  margin-top: 5rem;

  .title {
    margin: 0;
  }

  .searched-url {
    margin-top: 0;
    text-align: center;
    font-weight: 400;
    color: #377FCC;
  }

  .trackerList {

    .headline-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .75rem;

      img {
        width: 5rem;
        height: 5rem;
      }
    }

    .text {
      a {
        color: #377FCC;
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .tracker {
      overflow: hidden;
      margin-top: .5rem;

      .name {
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

      .details {
        padding: 1rem;

        .requestList {
          border: 1px #aaa solid;
          border-radius: .5rem;
          overflow: hidden;
          margin-top: 1rem;

          .request {
            background-color: #eee;
            padding: 1rem;
            display: flex;

            &:nth-child(even) {
              background-color: #ddd;
            }

            .method {
              font-weight: bold;
              margin: 0 1rem;
            }

            .url {
              word-break: break-word;
            }
          }
        }
      }
    }

    h3.headline {
      text-align: center;
      font-weight: 400;
      margin-top: 3rem;
      margin-bottom: 1.5rem;
    }

    .text-share {
      margin-bottom: 1.75rem;

    }

    .share {
      display: flex;
      align-items: center;

      width: 90%;
      border-radius: .5rem;

      margin: 0 auto;

      .url {
        font-size: 16px;
        padding: .75rem;
        border: 2px #DADADA solid;
        color: #A7A7A7;
        border-radius: 5px 0 0 5px;
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding: .75rem;
        background-color: #377FCC;
        border: 1px #377FCC solid;
        color: #fff;
        border-radius: 0 5px 5px 0;
        flex-grow: 1;
        min-width: max-content;
        max-width: 14rem;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
      }
    }

    .text-more {
      margin-bottom: 2rem;
    }

    .arrow {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;

      span {
        display: block;
        width: 14px;
        height: 14px;
        background-color: #B72956;
        border-radius: 50%;
        animation: downArrow 1.5s infinite;
      }

      span:nth-child(2) {
        animation-delay: 0.3s;
      }

      span:nth-child(3) {
        animation-delay: 0.6s;
      }

      .down {
        // 50 to 26px
        width: 0;
        height: 0;
        border-left: 25px solid transparent;
        border-right: 25px solid transparent;
        border-top: 25px solid #B72956;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>