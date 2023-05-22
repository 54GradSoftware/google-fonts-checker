<template>

<div class="top">
  <router-view/>
  <img src="./assets/logo512-outline.svg" alt="logo" class="back">
    <header role="navigation">
      <div class="left">
        <img src="./assets/logo512.svg" alt="logo" class="logo onlyDesktop">
        <div>Google Fonts Checker <span class="branding onlyDesktop">von 54 Grad Software</span></div>
      </div>
      <div class="right">
        <SwitchLanguage/>
        <a href="https://github.com/54GradSoftware/google-fonts-checker/" target="_blank" rel="noreferrer" class="github" :aria-label="$t('header.linkToGithubAlt')">
          <img src="./assets/GitHub-Mark-Light-64px.png" alt="Logo GitHub">
        </a>
      </div>
    </header>
  </div>
  <footer>
    {{ $t('footer.madeWithLove', { icon: '&#9829;' }) }}
    <a href="https://54gradsoftware.de" target="_blank" rel="noreferrer">54 Grad Software GmbH</a> -
    <a href="https://54gradsoftware.de/impressum" target="_blank" rel="noreferrer">{{ $t('footer.imprint') }}</a> -
    <a href="https://54gradsoftware.de/datenschutz" target="_blank" rel="noreferrer">{{ $t('footer.privacyNotice') }}</a>
  </footer>
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
    header{
      padding: 0 1rem;
      box-sizing: border-box;
      background-color: #0E57AA;
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
      .branding{
        font-size: .7em;
        font-weight: normal;
      }
      .left{
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        font-weight: bold;
        text-decoration: none;
        color: #fff;
        opacity: 1;
        transition: all .5s ease;
        .logo{
          height: 3rem;
          width: 6rem;
          object-fit: cover;
          padding: 0 1rem;
        }
      }
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
  footer{
    padding: 1rem;
    background-color: #222;
    color: #fff;
    a{
      color: #fff;
    }
  }
  .button{
    padding: 1rem;
    background-color: #0E57AA;
    border: 1px #0E57AA solid;
    color: #fff;
    border-radius: 0.5rem;
    width: fit-content;
    cursor: pointer;
    display: block;
    text-decoration: none;
    margin: auto;
  }
}
.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
.back{
  position: fixed;
  opacity: .05;
  height: 65rem;
  right: -20rem;
  top: -20rem;
  transform: scaleX(-1);
  user-select: none;
  z-index: -1;
}
@media screen and (max-width: 50rem) {
  .onlyDesktop{
    display: none;
  }
  .back{
    right: -40rem;
  }
}
.box {
  border: 1px #aaa solid;
  border-radius: .5rem;
  padding: 1rem;
}
</style>
