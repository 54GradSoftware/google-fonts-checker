<template>
  <div class="GoogleFonts">
    <h3 class="heading">{{ $t('result.tracker.AdobeFonts.headline') }}</h3>
    <slot></slot>
    <p>
      {{ $t('result.tracker.AdobeFonts.section1') }}
    </p>
  </div>
</template>
<script setup>
</script>
<style scoped>
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
