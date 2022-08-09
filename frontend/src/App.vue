<template>
  <div class="top">
    <router-view/>
    <div class="header">
      <div>Google Fonts Checker</div>
      <a href="https://github.com/54GradSoftware/google-fonts-checker/" target="_blank" rel="noreferrer" class="github">
        <img src="./assets/GitHub-Mark-Light-64px.png" alt="GitHub Repository">
      </a>
    </div>
  </div>
  <div class="footer">
    {{ $t('footer.madeWithLove', {icon: '&#9829;'}) }}
    <a href="https://54gradsoftware.de" target="_blank" rel="noreferrer">54 Grad Software</a> -
    <a href="https://54gradsoftware.de/impressum" target="_blank" rel="noreferrer">{{ $t('footer.imprint') }}</a> -
    <a href="https://54gradsoftware.de/datenschutz" target="_blank" rel="noreferrer">{{ $t('footer.privacyNotice') }}</a>
  </div>
</template>

<script setup>
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
      background-color: #088aaa;
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
      .github{
        width: 2rem;
        height: 2rem;
        display: flex;
      }
    }
  }
  .footer{
    padding: 1rem;
    background-color: #222;
    color: #fff;
    a{
      color: #fff;
    }
  }
  .button{
    padding: 1rem;
    background-color: #157aec;
    border: 1px #157aec solid;
    color: #fff;
    border-radius: 0.5rem;
    width: fit-content;
    cursor: pointer;
    display: block;
    text-decoration: none;
    margin: auto;
  }
}
</style>
