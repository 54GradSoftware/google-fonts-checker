<template>
  <div class="GoogleFonts">
    <h3 class="heading">{{ $t('result.tracker.GoogleFonts.headline') }}</h3>
    <slot></slot>
    <p>
      {{ $t('result.tracker.GoogleFonts.section1') }}
      <ScrollToAnchor to="WhyNotToUse" class="more">{{ $t('result.tracker.GoogleFonts.learnMore') }}</ScrollToAnchor>
    </p>
  </div>
</template>
<script setup>
import ScrollToAnchor from '@/components/ScrollToAnchor.vue';
</script>
<style scoped>
.more {
  color: #377FCC;
}

.heading {
  font-weight: 400;
  text-align: center;
}
</style>
