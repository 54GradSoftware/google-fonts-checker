<template>
  <router-view/>
  <header role="navigation">
    <div class="left">
      <img src="./assets/logo-figma.png" alt="logo" class="logo onlyDesktop" height="81">

      <div class="branding">
        <h4>Google Fonts Checker</h4>
        <p>von 54 Grad Software</p>
      </div>
    </div>
    <div class="right">
      <div class="branding onlyDesktop">
        <p>Entdecke alle unsere</p>
        <p><b>Webseiten-Prüfungen</b></p>
      </div>
      <a>
        <button>
          Zu webrad.ar
          <img src="./assets/icons/double_arrow_right.svg" alt=""/>
        </button>
      </a>
      <!-- <SwitchLanguage/> -->
    </div>
  </header>
  <footer>
    <div class="branding">
      <img src="./assets/logo-figma.png" alt="logo" class="logo" height="81">
      <h4>Google Fonts Checker</h4>
      <p>von 54 Grad Software</p>
    </div>
    <div class="content">
      <p>
        Der Google Fonts Checker ist ein kostenloses Online-Prüftool der
        <a href="https://54gradsoftware.de">54 Grad Software GmbH.</a>
      </p>

      <div class="links">
        <a href="https://54gradsoftware.de/impressum" target="_blank" rel="noreferrer">{{ $t('footer.imprint') }}</a> -
        <a href="https://54gradsoftware.de/datenschutz" target="_blank" rel="noreferrer">{{ $t('footer.privacyNotice') }}</a>
      </div>
    </div>
    <a class="github" href="https://github.com/54GradSoftware/google-fonts-checker" target="_blank" rel="noreferrer">
      <img src="./assets/GitHub-Mark-Light-64px.png" alt="Logo GitHub" height="56">
    </a>
  </footer>
</template>

<script setup>
//import SwitchLanguage from '@/components/SwitchLanguage.vue';
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

h1 {
  font-size: 72px;
}

h2 {
  text-align: center;
  font-size: 40px;
}

h3 {
  font-size: 32px;
}
h4 {
  font-size: 24px;
}
h5 {
  font-size: 20px;
}

html, body {
  height: 100%;
  margin: 0;
  color: #393A4A;
}

body {
  position: relative;
  z-index: 0;
}

#app {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: 100%;
  font-family: system-ui, sans-serif;
  line-height: 1.4;

  a {
    color: #377FCC;
  }

  header {
    padding: 1.25rem 5rem;
    box-sizing: border-box;
    background-color: #377FCC;
    color: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    min-height: 4rem;

    p, h1, h2, h3, h4 {
      margin: 0;
    }

    .left {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #fff;
      opacity: 1;
      transition: all .5s ease;

      .logo {
        object-fit: cover;
        margin-top: .5rem;
        margin-right: 1rem;
      }
    }

    .right {
      display: flex;
      gap: 3rem;
      align-items: center;

      .branding {
        text-align: right;
      }

      button {
        display: flex;
        align-items: center;
        background-color: transparent;
        color: #fff;
        text-decoration: underline;
        font-size: 1.25rem;
        font-weight: 700;
        border: 2px #fff solid;
        border-radius: 0.5rem;
        padding: 0.625rem 1rem;

        img {
          height: 1.5rem;
          filter: invert(1);
          width: auto;
          margin-left: 0.5rem;
        }
      }
    }
  }

  footer {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 5rem 3rem 5rem;

    background-color: #377FCC;
    color: #fff;

    p, h1, h2, h3, h4 {
      margin: 0;
    }


    a {
      color: #fff;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: center;
      text-align: center;
    }

    .github {
      margin-top: 4rem;
      margin-left: 4rem;
    }

  }
}

@media screen and (max-width: 960px) {
  #app {
    header {
      .right {
        gap: 2rem;
      }
    }

    footer {
      padding: 3rem 3rem 2.5rem 3rem;
      gap: 2.5rem;
    }
  }
}

@media screen and (max-width: 720px) {
  #app {
    header {
      .right {
        gap: 1rem;
      }
    }

    footer {
      padding: 2rem;
      flex-direction: column;

      .branding {
        text-align: center;
      }

      .github {
        margin: 0;
      }
    }
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

.back {
  position: fixed;
  opacity: .05;
  height: 65rem;
  right: -20rem;
  top: -20rem;
  transform: scaleX(-1);
  user-select: none;
  z-index: -1;
}

.box {
  border: 1px #aaa solid;
  border-radius: .5rem;
  padding: 1rem;
}

@media screen and (max-width: 50rem) {
  .onlyDesktop {
    display: none;
  }
  .back {
    right: -40rem;
  }
}
.box {
  border: 1px #aaa solid;
  border-radius: .5rem;
  padding: 1rem;
}

.card {
  padding: 56px 80px;
  border-radius: 23px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin-bottom: 80px;
  font-size: 20px;
}

.subheading {
  font-size: 32px;
  margin-top: 6rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: normal;
}

@media (max-width: 768px) {
  .card {
    padding: 32px 24px;
    font-size: 16px;
    margin-left: 0;
    margin-right: 0;
  }

  h2 {
    font-size: 28px;
  }

  .subheading {
    font-size: 24px;
    margin-top: 3rem;
  }
}
</style>
