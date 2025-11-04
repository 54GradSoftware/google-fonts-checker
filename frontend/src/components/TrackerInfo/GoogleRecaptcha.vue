<template>
  <div class="GoogleFonts">
    <h3 class="headline">{{ $t('result.tracker.GoogleRecaptcha.headline') }}</h3>
    <p>
      {{ $t('result.tracker.GoogleRecaptcha.section1') }}
      <ScrollToAnchor to="WhyNotToUse" class="more">{{ $t('result.tracker.GoogleRecaptcha.learnMore') }}</ScrollToAnchor>
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