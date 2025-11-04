<template>
  <div class="GoogleFonts">
    <h3>{{ $t('result.tracker.GoogleFonts.headline') }}</h3>
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
</style>
