<template>
  <div class="SwitchLanguage">
    <div
      v-for="(lang, index) of messages"
      :key="lang"
      :class="{ active: index === $route.params.locale }"
      class="languageOption"
      @click="$router.push(`/${index}`)"
    >
      {{ lang.localeName }}
    </div>
  </div>
</template>

<script setup>
import { messages } from '@/languages';
</script>

<style scoped lang="scss">
  .SwitchLanguage{
    display: flex;
    flex-flow: row;
    margin-right:20px;
    .languageOption{
      font-size: 1rem;
      margin: 0 .25rem;
      cursor: pointer;
      &.active{
        text-decoration: underline;
      }
    }
  }
</style>
