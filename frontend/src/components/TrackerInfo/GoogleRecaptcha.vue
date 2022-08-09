<template>
  <div class="GoogleFonts">
    <b>{{ $t('result.tracker.GoogleRecaptcha.headline') }}</b>
    <p>
      {{ $t('result.tracker.GoogleRecaptcha.section1') }}
      <ScrollToAnchor to="WhyNotToUse">{{ $t('result.tracker.GoogleRecaptcha.learnMore') }}</ScrollToAnchor>
    </p>
  </div>
</template>
<script setup>
import ScrollToAnchor from '@/components/ScrollToAnchor.vue';
</script>
