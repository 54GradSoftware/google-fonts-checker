<template>
  <div class="ThrobberLoading">
    <h3 class="title">Wir prüfen deine Seite ...</h3>
    <img src="@/assets/throbber.svg" alt="loading" class="throbber">

    <h4 class="subtitle">Keine Lust zu warten?</h4>
    <h5 class="text">
      <strong>webrad.ar</strong> prüft automatisch alle deine Unterseiten und
      benachrichtigt dich.
    </h5>

    <div class="arrow">
      <span></span>
      <span></span>
      <span></span>
      <div class="down"></div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
defineProps({
  info: String
});
</script>

<style scoped lang="scss">
  .ThrobberLoading {
    width: 450px;
    padding: 1.5rem 3.5rem;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: #aaaa 2px 2px 4px;
    display: flex;
    flex-flow: column;
    align-items: center;

    .text {
      margin-top: 0;
      font-weight: normal;
    }

    .subtitle {
      margin-bottom: 1rem;
      margin-top: 2rem;
    }
    .throbber {
      width: 6.5rem;
      height: 6.5rem;
    }

    .info {
      margin-top: 1rem;
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
</style>