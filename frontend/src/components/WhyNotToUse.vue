<template>
  <h2 id="WhyNotToUse">Warum kein Google Fonts verwenden?</h2>
  <p>
    Google Fonts lädt standartmäßig die Schriftarten von der Google CDN. <br>
    Dabei werden einige Daten an Google Übermittelt. So zum Beispiel:
  </p>
  <ul>
    <li>deine IP-Adresse</li>
    <li>die aufgerufene Webseite</li>
    <li>das verwendete Gerät bzw. Modell</li>
    <li>der verwendete Browser</li>
  </ul>
  <p>
    Dadurch kann Google ein Nutzerprofil von dir anlegen und zum Beispiel relavante Werbung anzeigen.
    Dadurch verstößt die Nutzung von Google Fonts je nach Anwendungsfall meist gegen die DSGVO.
  </p>
  <h3>Wie kann ich Google Schriftarten ohne Tracking und DSGVO-Konform benutzen?</h3>
  <p>
    Die Google Schriftarten können mit wenig Aufwand auch selbständig gehostet werden.
    Dadauch kann sich zusätzlich sogar die Performance der Webseite verbessern. <br>
    Um die Google Schriftarten einzubinden gibt es ein Online-Tool, welches diesen Prozess erleichtert:
    <a href="https://google-webfonts-helper.herokuapp.com/fonts/roboto?subsets=latin" target="_blank" rel="noreferrer">Google Webfonts Helper</a><br>
    Hier müssen zunächst alle Typen ausgewählt werden, die benötigt werden. <br>
    Darauf wird ein CSS-File generiert, welches auf der eigenen Seite eingebunden werden muss. -
    Dabei lässt sich der Order-Prefix festlegen, wo die Schriftarten später gespeichert werden sollen. <br>
    Jetzt muss nur noch die Zip-Datei mit den Schriftarten runtergeladen
    und in den Webspace hochgeladen werden. Zum Beispiel mit einem FTP-Client. <br>
    Bei der Verwendung von Git müssen die Schriften einfach zum Projekt hinzugefügt werden.
  </p>
  <h3>Sonstiges</h3>
  <p>
    Wenn du deine Website noch auf weitere Schwachstelllen testen möchtest,
    kannst du folgendes Open Source Tool benutzen: <a href="https://webbkoll.dataskydd.net/en" target="_blank" rel="noreferrer">Webbkoll</a>
  </p>
</template>


<style scoped>

</style>