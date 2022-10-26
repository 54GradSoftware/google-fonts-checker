<template>
  <div class="SwitchLanguage">
    <a
      v-for="(lang, index) of messages"
      :key="lang"
      :class="{ active: index === $route.params.locale }"
      class="languageOption"
      @click.prevent="$router.push(`/${index}`)"
      :aria-label="$t(`header.langTo.${lang.localeName}`)"
      :href="lang.localeName"
    >
      {{ lang.localeName }}
  </a>
  </div>
</template>

<script setup>
import { messages } from '@/languages';
</script>

<style scoped lang="scss">
  .SwitchLanguage{
    display: flex;
    flex-flow: row;
    .languageOption{
      font-size: 1rem;
      margin: 0 .25rem;
      cursor: pointer;
      color: white;
      text-decoration: none;
      &.focus{
        border: 1px solid white;
      }
      &.active{
        text-decoration: underline;
      }
    }
  }
</style>
