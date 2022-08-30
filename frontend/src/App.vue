<template>
  <div class="top">
    <router-view/>
    <div class="header">
      <div>Google Fonts Checker</div>
      <div class="right">
        <SwitchLanguage/>
        <a href="https://www.illusion-factory.de" target="_blank" rel="noreferrer">
          <img src="./assets/logo.png" alt="IllusionFACTORY" width="249" height="30" style="display:block;max-width:100%;height:auto;">
        </a>
      </div>
    </div>
  </div>
  <div class="footer">
    <a href="https://www.illusion-factory.de/impressum.html" target="_blank" rel="noreferrer">Impressum</a> -
    <a href="https://www.illusion-factory.de/datenschutz.html" target="_blank" rel="noreferrer">Datenschutz</a>
  </div>
</template>

<script setup>
import SwitchLanguage from '@/components/SwitchLanguage.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
const route = useRoute();
const i18n = useI18n();
watch(() => route.params.locale, locale => {
  i18n.locale._setter(locale.toString());
});
</script>

<style lang="scss">
html, body{
  height: 100%;
  margin: 0;
}
#app {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: 100%;
  font-family: system-ui, sans-serif;
  line-height: 1.4;
  .top{
    .header{
      padding: 1rem;
      box-sizing: border-box;
      background-color: #3171A6;
      color: #fff;
      font-weight: bold;
      font-size: 1.2rem;
      position: fixed;
      top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 4rem;
      .right{
        display: flex;
        flex-flow: row;
        align-items: center;
        .github{
          width: 2rem;
          height: 2rem;
          display: flex;
          margin-left: 1rem;
        }
      }
    }
  }
  .footer{
    padding: 1rem;
    background-color: #3171A6;
    color: #fff;
    a{
      color: #fff;
    }
  }
}
</style>
