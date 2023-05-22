<script setup>
</script>
<template>
  <template v-if="$route.params?.locale && $route.params.locale.includes('de')">
    <h2 id="faq">FAQ - Häufig gestellte Fragen</h2>
    <div class="box">
      <h3>Wofür braucht es Schriftarten auf Webseiten?</h3>
      <span>Webseiten benötigen Schriftarten, um den Textinhalt der Seite darzustellen. Schriftarten sind eine Sammlung
        von Zeichen, Buchstaben und Symbolen, die in einem bestimmten Stil und Design gestaltet sind. Sie bestimmen, wie
        Buchstaben und Zeichen auf dem Bildschirm dargestellt werden.
        Webseiten könnten auch die Standardschriftart des Computers oder Smartphones verwenden, aber dann wäre das Design
        der Webseite nicht mehr einheitlich und es könnten keine Designakzente mehr gesetzt werden.</span>
      <h3>Gibt es alternativen zu Google Fonts?</h3>
      <span>
        HTML, die Basistechnologie, mit der Webseiten erstellt werden, erlaubt es, Schriften aus verschiedenen Quellen zu
        beziehen. Technisch spricht nichts dagegen, die Schriften vom selben Server (Quelle) zu beziehen wie den Rest der
        Webseite.
        Mit welchem Tool man die Einbindung von Google Fonts konvertieren kann, haben wir <a href="#HowToNotUse">hier</a>
        gezeigt.
      </span>
      <h3>Was sollte ich tun, wenn ich eine Abmahnung wegen Google Fonts erhalten habe?</h3>
      <span>
        Disclaimer: Es handelt sich hier nicht um eine Rechtsberatung.<br />
        Grundsätzlich gilt: Ruhe bewahren. Die Hürde für eine Abmahnung ist nicht unbedingt hoch und eine Abmahnung ist
        nicht unbedingt gerechtfertigt.
        Am besten ist es, sich konkret über den Vorfall zu informieren und gegebenenfalls juristischen Rat einzuholen.
        Viele Abmahnungen wegen Google Fonts wurden massenhaft verschickt. Ziel war es nicht, dafür zu sorgen, dass die
        Forderung durchgesetzt wird, sondern zu hoffen, dass genug Leute einfach so zahlen. <br />
        Trotzdem ist von der Verwendung von Google Fonts auf einer deutschen Webseite abzuraten.
      </span>
      <h3>Habe ich Nachteile, wenn ich Google Fonts nicht verwende?</h3>
      <span>
        Nein hat es nicht. Du kannst selber entscheiden wie du deine Schriftarten pflegt.
      </span>
      <h3>Wie kann ich feststellen, ob meine Webseite Google Fonts verwendet?</h3>
      <span>
        Deshalb haben wir diesen Google Fonts Checker gebaut. Du kannst einfach die URL deiner Webseite eingeben und der
        Checker sagt dir, ob Google Fonts gefunden wurden. Wir prüfen keine Unterseiten, sondern nur die URL. <a
          href="#GoogleFontsCheck">Hier</a> geht es zum Google Fonts Checker.
      </span>
      <h3>Warum habt ihr das gebaut?</h3>
      <span>
        Wir, die 54 Grad Software GmbH, haben in Gesprächen mit verschiedenen Kunden festgestellt, dass es viele
        Unsicherheiten zum Thema Integration auf Webseiten gibt. Als Webentwickler kann man relativ schnell herausfinden,
        welche externen Einbindungen vorhanden sind. Gleichzeitig werden Google Fonts von vielen Wordpress Themes und
        anderer Standardsoftware verwendet. Um die Unsicherheiten zu verringern, haben wir dieses kleine Programm
        geschrieben und kostenlos zur Verfügung gestellt. Der Quellcode ist ebenfalls <a
        href="https://github.com/54GradSoftware/google-fonts-checker/" target="_blank">online verfügbar</a>. Es freut
      uns sehr, dass dieses kleine Projekt bereits hunderttausendfach genutzt wurde.
      Für Feedback, Ideen oder Fragen könnt ihr uns gerne eine <a href="mailto:kontakt+gfc@54gradsoftware.de">EMail</a>
      schicken.
    </span>
    <h3>Was ist die 54 Grad Software GmbH?</h3>
    <span>Wir sind eine auf Webentwicklung spezialisierte Softwareentwicklungsagentur aus Flensburg. Unser Schwerpunkt liegt in der Erstellung von Webanwendungen für unsere Kunden, die in der Regel deutlich größer und komplexer sind. Häufig handelt es sich dabei um Verwaltungsoberflächen und Schnittstellen für interne Prozesse oder komplett eigenständige Endkundenanwendungen. Weitere Informationen finden Sie auf unserer <a href="https://www.54gradsoftware.de/" target="_blank">Webseite</a>.</span>
  </div>
</template></template>