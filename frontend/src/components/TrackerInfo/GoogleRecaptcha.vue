<template>
  <div class="GoogleFonts">
    <b>Warum kein Google reCAPTCHA verwenden?</b>
    <p>
      Google reCAPTCHA trackt das Nutzungsverhalten des Users auf der Webseite und lädt standartmäßig die Schriftarten von der Google CDN. <br>
      Einige Daten - wie z.B. deine IP-Adresse und die aufgerufte Website - werden dabei an Google Übermittelt.
      Dadurch verstößt die Nutzung von Google reCAPTCHA/Google Fonts je nach Anwendungsfall meist gegen die DSGVO.
      <ScrollToAnchor to="WhyNotToUse">mehr erfahren</ScrollToAnchor>
    </p>
  </div>
</template>
<script setup>
import ScrollToAnchor from '@/components/ScrollToAnchor.vue';
</script>

<style scoped>

</style>