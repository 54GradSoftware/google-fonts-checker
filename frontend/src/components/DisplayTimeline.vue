<script setup>
const timeline = [
  {date: '22.05.2023', description: 'Wir haben ein FAQ für alle Fragen, die du haben könntest', link: '#faq'},
  {date: '01.05.2023', description: 'Golem.de: "Abmahnwelle wegen Google Fonts ist rechtsmissbräuchlich"', link: 'https://www.golem.de/news/landgericht-muenchen-abmahnwelle-wegen-google-fonts-ist-rechtsmissbraeuchlich-2305-173866.html'},
  {date: '21.11.2022', description: 'Blogpost: 300.000 Analysen', link: 'https://www.54gradsoftware.de/blog/unser-google-fonts-checker-uber-300k-analysen'},
  {date: '09.08.2022', description: 'Erweiterung um die englische Sprache', link: false},
  {date: '04.05.2022', description: 'Erweiterung um die Prüfung nach Google ReCaptcha und Google Maps', link: false},
  {date: '08.03.2022', description: 'Google Fonts DSGVO konform nutzen', link: 'https://www.54gradsoftware.de/blog/google-fonts-dsgvo-konform-nutzen'},
  {date: '08.03.2022', description: 'Case Study Google Fonts Checker', link: 'https://www.54gradsoftware.de/blog/google-fonts-checker'},
  {date: '03.03.2022', description: 'Markteinführung des Google Fonts Checker der 54 Grad Software GmbH', link: 'https://github.com/54GradSoftware/google-fonts-checker/'},
  {date: '20.01.2022', description: 'Urteil Landgericht München: "Verletzung des Persönlichkeitsrechts durch Datenschutzverstoß" (LG München I, Az. 3 O 17493/20)', link: 'https://www.gesetze-bayern.de/Content/Document/Y-300-Z-GRURRS-B-2022-N-612?hl=true'},
  
]
</script>
<template>
  <template v-if="$route.params?.locale && $route.params.locale.includes('de')">
    <h2 id="timeline">Timeline</h2>
    <div class="box">
      <ul>
        <li v-for="entry in timeline" :key="entry">
          <a v-if="entry.link" :href="entry.link" target="_blank">{{ entry.date }} {{ entry.description }}</a>
          <template v-else>{{ entry.date }} {{ entry.description }}</template>
        </li>
      </ul>
    </div>
  </template>
</template>