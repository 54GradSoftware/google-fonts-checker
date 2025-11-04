<script setup></script>
<template>
    <div class="card">
        <div class="">
            <h2>Was ist der Google Fonts Checker</h2>
            <p>
                Wir bei
                <a
                    href="https://54gradsoftware.de"
                    target="_blank"
                >
                    54 Grad Software GmbH
                </a>
                haben den Google Fonts Checker Anfang 2022 entwickelt, damit du
                schnell und unkompliziert prüfen kannst, ob deine Website Google
                Fonts extern lädt.
                <br />
                Du gibst einfach deine URL ein - der Checker analysiert die
                Seite innerhalb weniger Sekunden und zeigt dir an, ob
                Schriftarten über Server von Google eingebunden werden. So hilft
                dir unser Tool dabei, mögliche
                <b>Datenschutzrisiken frühzeitig zu erkennen</b>
                und entsprechende Anpassungen für eine DSGVO-konforme Webseite
                vorzunehmen.
            </p>
            <p>
                Für die Prüfung verwenden wir einen
                <b>Google-Chrome-Browser</b>
                , daher können die Ergebnisse je nach Browserkonfiguration
                leicht abweichen. Wir sind keine Juristen, und die Analyse
                ersetzt keine rechtliche Beratung. Selbstverständlich wird unser
                Dienst mit größter Sorgfalt betrieben, dennoch übernehmen wir
                <b>keine Haftung für die Ergebnisse</b>
                .
            </p>
        </div>
        <div class="">
            <h2 class="subheading">
                Einzelseitenprüfung vs. automatische Webseitenanalyse
            </h2>
            <div class="content-container">
                <div class="text-content">
					<p>
                    Der Google Fonts Checker prüft immer nur die
                    <b>konkret eingegebene Seite</b>
                    - also genau die URL, die du im Tool angibst. Das ist ideal
                    für einen schnellen, gezielten Check.
                </p>
                <p>
                    Gerade bei größeren Webanwendungen kann sich die Einbindung
                    von Google Fonts oder anderen externen Inhalten jedoch auch
                    in einzelnen Unterseiten oder spezifischen Elementen
                    verstecken, die manuell kaum zu finden sind. Daher ergibt
                    eine automatisierte Prüfung Sinn - sie spart Zeit und sorgt
                    für mehr Rechtssicherheit.
                </p>
                <p>
                    <b>
                        Eine solche umfassende Analyse ist mit
                        <a
                            href="https://webrad.ar"
                            target="_blank"
                        >
                            webrad.ar
                        </a>
                        möglich:
                    </b>
                    <br />
                    Unser Tool erfasst automatisch alle Unterseiten einer Domain
                    und prüft sie regelmäßig auf technische, rechtliche und
                    barrierefreie Aspekte. Zu den Qualitätsprüfungen gehört auch
                    Externer Schriften, zu denen auch die Google Fonts zählen.
                </p>
				</div>
				<div class="image-content">
					<img src="@/assets/webradarAnalyse.svg" alt="Webrad.ar Analysis Screenshot">
				</div>
            </div>
        </div>
    </div>
</template>

<style>


.content-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
}

.text-content {
    flex: 1;
}

.image-content {
    flex: 0 0 auto;
    max-width: 400px;
}

.image-content img {
    width: 100%;
    height: auto;
    border-radius: 8px;
	margin-left: 2rem;
}

@media (max-width: 768px) {
    .content-container {
        flex-direction: column;
        gap: 1rem;
    }
    
    .image-content {
        display: none;
    }
}
</style>
