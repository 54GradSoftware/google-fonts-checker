<template>
  <div class="ThrobberLoading">
    <img src="@/assets/throbber.svg" alt="loading" class="throbber">
    <div class="info">{{info??'loading'}}</div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
defineProps({
  info: String
});
</script>

<style scoped lang="scss">
  .ThrobberLoading{
    width: max-content;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: #aaaa 2px 2px 4px;
    display: flex;
    flex-flow: column;
    align-items: center;
    .throbber{
      width: 5rem;
      height: 5rem;
    }
    .info {
      margin-top: 1rem;
    }
  }
</style>