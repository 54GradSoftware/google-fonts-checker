<script setup>
import { ref } from 'vue';

	const codeCopied = ref(false);

	function copyDiscountCode() {
		navigator.clipboard.writeText("FONTS25");
		codeCopied.value = true;
	}
</script>

<template>
    <div class="card">
        <div>
            <h2>Weitere rechtliche Pflichten für Webseiten</h2>
            <p>
                Nicht nur Google Fonts können rechtlich relevant sein. Als
                Betreiber*in einer Website müssen auch
                <b>andere gesetzliche Pflichten</b>
                beachtet werden - insbesondere die Informationspflichten im
                <b>Impressum</b>
                und der
                <b>Datenschutzerklärung</b>
                sowie Anforderungen an
                <b>digitale Barrierefreiheit.</b>
            </p>
        </div>
        <div>
            <h2 class="subheading">Impressumspflicht nach dem DDG</h2>
            <p>
                Laut dem
                <a
                    href="https://www.gesetze-im-internet.de/ddg/BJNR0950B0024.html"
                    target="_blank"
                >
                    Digitale-Dienste-Gesetz (DDG)
                </a>
                müssen Betreiber*innen von Webseiten mit geschäftlichem Zweck -
                darunter meist auch Vereine oder Initiativen - ein Impressum
                bereitstellen. Dieses muss leicht erkennbar, unmittelbar
                erreichbar und ständig verfügbar sein, klassischerweise durch
                einen klar bezeichneten Link im Footer jeder Unterseite. Fehlt
                das Impressum oder ist es nicht ausreichend zugänglich, drohen
                Bußgelder bis zu
                <b>50.000 Euro</b>
                und
                <b>Abmahnungen</b>
                wegen Wettbewerbsverstößen.
            </p>
        </div>
        <div>
            <h2 class="subheading">Datenschutzerklärung nach der DSGVO</h2>
            <p>
                Sobald auf deiner Website personenbezogene Daten erhoben oder
                verarbeitet werden - etwa über Kontaktformulare, Cookies oder
                Tracking -, greift die
                <a
                    href="https://eur-lex.europa.eu/legal-content/DE/TXT/PDF/?uri=CELEX:32016R0679"
                    target="_blank"
                >
                    Datenschutz-Grundverordnung (DSGVO)
                </a>
                .
            </p>
            <p>
                Sie verpflichtet Betreiber*innen, in einer Datenschutzerklärung
                transparent offenzulegen, welche Daten erhoben, zu welchem Zweck
                sie verarbeitet und wie lange sie gespeichert werden. Zudem
                müssen Besucherinnen über ihre Rechte informiert werden,
                darunter das Recht auf Auskunft, Berichtigung, Löschung,
                Datenübertragbarkeit und Widerspruch.
            </p>
        </div>
        <div>
            <h2 class="subheading">Barrierefreiheit nach dem BFSG</h2>
            <p>
                Barrierefreiheit ist ein zentraler Bestandteil moderner
                Webentwicklung und trägt zur
                <b>digitalen Inklusion</b>
                bei. In Deutschland leben rund
                <b>9,4 % der Bevölkerung mit einer Schwerbehinderung</b>
                und nahezu die Hälfte aller Menschen wird im Laufe ihres Lebens
                auf barrierefreie digitale Angebote angewiesen sein. Zudem
                verbessern zugängliche Websites nicht nur die gesellschaftliche
                Teilhabe und vergrößern die Zielgruppe, sondern optimieren auch
                die
                <b>User Experience aller Nutzer*innen.</b>
            </p>
            <p>
                Mit dem
                <a
                    href="https://www.gesetze-im-internet.de/bfsg/"
                    target="_blank"
                >
                    Barrierefreiheitsstärkungsgesetz (BFSG)
                </a>
                wurde der European Accessibility Act ins nationale Recht
                überführt. Seit dem
                <b>28. Juni 2025</b>
                gelten die
                <b>
                    Barrierefreiheitsanforderungen auch für private Unternehmen.
                </b>
                Die Überprüfung der Barrieren ist komplex und erfordert für eine
                100%ige Erfüllung der Anforderungen manuelle Testungen. Ein
                Großteil der Barrierefreiheitsanforderungen kann jedoch
                automatisiert geprüft werden. Die
                <a
                    href="https://webrad.ar/dokumentation/lighthouse-barrierefreiheit"
                    target="_blank"
                >
                    Lighthouse-Barrierefreiheitsprüfung
                </a>
                von webrad.ar orientiert sich an den automatisiert prüfbaren
                WCAG 2.1-Kriterien. Überprüft wird dabei die gesamte Webseite
                mit allen Unterseiten. Somit hilft die Prüfung zentrale
                Barrieren frühzeitig zu erkennen. Für die gesetzeskonforme
                Umsetzung der Barrierefreiheitsanforderungen ist ein
                <b>Accessibility-Score von 100 Punkten notwendig.</b>
            </p>
        </div>
        <div>
            <h2 class="subheading">
                Datenschutz, Impressum, Barrierefreiheit im Blick
            </h2>
            <div class="content-container">
                <div class="text-content">
                    <p>
                        Mit <a href="https://webrad.ar">webrad.ar</a> kannst du automatisiert prüfen, ob deine
                        Webseite die <b>rechtlich relevanten Verlinkungen</b> zu
                        Impressum und Datenschutzerklärung <b>auf allen Unterseiten</b>
                        vorhanden und erreichbar sind.
                    </p>
                    <p>
                        Auch <b>Anforderungen an die digitale Barrierefreiheit</b>
                        werden geprüft. Dabei orientieren wir uns an den
                        automatisiert überprüfbaren <b>WCAG 2.1-Kriterien</b> und
                        unterstützen dich dabei rechtliche Risiken nach dem
                        Barrierefreiheitsstärkungsgesetz zu minimieren.
                    </p>
                    <p>
                        Zusätzlich bietet webrad.ar eine ganze Palette an
                        <b>weiteren Qualitätsprüfungen</b>, die für die Gesamtqualität
                        einer Website entscheidend sind – etwa zu Performance,
                        Suchmaschinenlesbarkeit, Nutzerfreundlichkeit und
                        Sicherheit.
                    </p>
                    <p>
                        So entsteht ein ganzheitlicher Blick auf die Qualität
                        deiner Website – rechtlich und technisch.
                    </p>
                </div>
                <div class="image-content">
                    <img
                        src="@/assets/webradarIcon.svg"
                        alt="Webrad.ar Analysis Screenshot"
                    />
                </div>
            </div>
        </div>
        <div class="cta">
            <div class="cta-button-wrapper">
                <a href="https://webrad.ar/preise" target="_blank" rel="noopener">
                    <button class="cta-btn">14 Tage kostenlos testen</button>
                </a>
                <button class="cta-btn-outline" @click="copyDiscountCode">
                    {{ codeCopied ? "Code kopiert!" : "Code: FONTS25" }}
                    <img
                        src="@/assets/icons/copyOutline.svg"
                        alt=""
                    />
                </button>
            </div>
            <p class="subtitle">
                Nur für kurze Zeit:
                <strong>25% Early-Bird-Rabatt</strong>
                auf alle webrad.ar-Pläne
            </p>
        </div>
    </div>
</template>

<style scoped>
ul {
    padding-left: 1.2rem;
    margin-top: 1rem;
}
li {
    margin-bottom: 0.8rem;
}

.cta {
    text-align: center;
    margin-top: 30px;
    font-size: 24px;
}

.cta-button-wrapper {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.cta-btn {
    background: #b50951;
    color: #ffffff;
    border: none;
    padding: 12px 28px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 24px;
}

.cta-btn-outline {
    background: none;
    color: #b50951;
    border: 2px solid #b50951;
    padding: 10px 26px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.cta-btn:hover {
    background: #9a0746;
}

.subtitle {
    font-size: 20px;
    margin-top: 6px;
}

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
    max-width: 200px;
}

.image-content img {
    width: 100%;
    height: auto;
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
    
    .cta {
        font-size: 18px;
    }
    
    .cta-button-wrapper {
        flex-direction: column;
        gap: 12px;
    }
    
    .cta-btn, .cta-btn-outline {
        font-size: 18px;
        width: 100%;
        max-width: 300px;
    }
    
    .subtitle {
        font-size: 16px;
    }
}
</style>
