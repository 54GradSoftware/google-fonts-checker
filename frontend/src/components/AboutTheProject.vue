<script setup>
import SupabaseSignUp from './SupabaseSignUp.vue';
</script>
<template>
  <h2 id="WhyNotToUse">{{ $t('about.headline') }}</h2>
  <div class="box">
    <template v-if="$route.params?.locale && $route.params.locale.includes('de')">
      Mit dem Google Fonts Checker wird die URL der eingebende Domain nach einer Einbindung von Google Fonts kontrolliert.
      Wir kontrollieren dabei nur die URL, keine Unterseiten. Für diese Kontrolle benutzen wir einen Google-Chrome
      Browser. In anderen Browsern kann es basierend auf der Konfiguration möglicherweise zu anderen Ergebnissen kommen.
      Wir übernehmen keine Haftung für das Ergebnis und sind keine Juristen. Der komplette Quellcode und Funktionsweise
      kann im Git Repository nachvollzogen werden.
      <SupabaseSignUp/>
    </template>
    <template v-else>
      <p>{{ $t('about.text') }}</p>
    </template>
  </div>
</template>