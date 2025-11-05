<template>
  <div class="GoogleFonts">
    <h3 class="heading">{{ $t('result.tracker.GoogleRecaptcha.headline') }}</h3>
    <slot></slot>
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