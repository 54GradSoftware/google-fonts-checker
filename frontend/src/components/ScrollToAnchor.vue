<template>
  <a @click.prevent="scrollTo(to)" :href="`#${to}`"><slot/></a>
</template>

<script setup>
import {defineProps} from 'vue';
defineProps({
  to: String
});
const scrollTo = id => document.getElementById(id)?.scrollIntoView({block: 'center', behavior: 'smooth'});
</script>
