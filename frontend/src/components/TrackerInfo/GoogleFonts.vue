<template>
  <div class="GoogleFonts">
    <b>{{ $t('result.tracker.GoogleFonts.headline') }}</b>
    <p>
      {{ $t('result.tracker.GoogleFonts.section1') }}
      <ScrollToAnchor to="WhyNotToUse">{{ $t('result.tracker.GoogleFonts.learnMore') }}</ScrollToAnchor>
    </p>
  </div>
</template>
<script setup>
import ScrollToAnchor from '@/components/ScrollToAnchor.vue';
</script>
