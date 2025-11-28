<template>
  <div class="GoogleMaps">
    <h3 class="heading">{{ $t('result.tracker.GoogleMaps.headline') }}</h3>
    <slot></slot>
    <p>{{ $t('result.tracker.GoogleMaps.section1') }}</p>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.heading {
  font-weight: 400;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 24px;
}

p {
  margin-bottom: 0;
}

</style>
