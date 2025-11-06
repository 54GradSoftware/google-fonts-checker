<script setup></script>

<template>
    <div class="card" id="lokal">
        <div>
            <h2>Google Fonts DSGVO-konform nutzen</h2>
            <p>
                Google Fonts lassen sich mit wenig Aufwand
                <b>lokal auf dem eigenen Server hosten</b>
                . Dadurch werden beim Laden der Seite
                <b>keine Daten an Google übermittelt</b>
                und gleichzeitig kann sich die Performance der Website
                verbessern.
            </p>
        </div>

        <div>
            <h2 class="subheading">So hostest du sie ganz einfach selbst</h2>
            <p>
                Um die Schriftarten DSGVO-konform einzubinden, kannst du das
                kostenlose Online-Tool
                <a
                    href="https://gwfh.mranftl.com/fonts"
                    target="_blank"
                >Google Webfonts Helper</a>
                verwenden und in 4 Schritten die Schriften selbst hosten:
            </p>

            <ul>
                <li>
                    <b>Schriftarten auswählen</b>
                    – Wähle alle benötigten Schriftarten aus.
                </li>
                <li>
                    <b>CSS-Datei generieren</b>
                    – Das Tool erstellt automatisch das passende CSS, das auf
                    deiner Seite eingebunden wird.
                </li>
                <li>
                    <b>Speicherort festlegen</b>
                    – Bestimme im Tool den Ordner-Präfix, in dem die
                    Schriftarten abgelegt werden sollen.
                </li>
                <li>
                    <b>Dateien hochladen</b>
                    – Lade die ZIP-Datei herunter und übertrage sie per FTP oder
                    füge sie bei Git-Projekten direkt hinzu.
                </li>
            </ul>

            <p>
                So stellst du sicher, dass deine Seite
                <b>datenschutzkonform</b>
                bleibt und Besucher*innen keine personenbezogenen Daten an
                Google übermitteln.
            </p>
        </div>
    </div>
</template>

<style scoped>
.subheading {
    margin-top: 60px;
    margin-bottom: 24px;
}
ul {
    padding-left: 1.2rem;
    margin-top: 1rem;
    list-style-type: decimal;
}



</style>
