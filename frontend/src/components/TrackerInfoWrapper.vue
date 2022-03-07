<template>
  <div class="TrackerInfoWrapper">
    <component :is="comp" />
  </div>
</template>

<script setup>
import {defineProps, defineAsyncComponent, ref} from 'vue';
const props = defineProps({
  tracker: Object
});

const snakeToCamel = string => string.split('-').map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join('');
const comp = ref(defineAsyncComponent(()=>import(`./TrackerInfo/${snakeToCamel(props.tracker.slug)}.vue`)));
</script>

<style scoped>

</style>