<script setup>
import { ref } from 'vue';

	const codeCopied = ref(false);

	function copyDiscountCode() {
		navigator.clipboard.writeText("FONTS25");
		codeCopied.value = true;
	}
</script>

<template>
    <section class="landing">
        <div class="landing-header">
            <h1>Google Fonts sind nur der Anfang</h1>
            <p>
                Mit
                <span class="brand">webrad.ar</span>
                hältst du deine gesamte Webseite auf Qualitätskurs
            </p>
        </div>

        <div class="content-wrapper">
            <!-- Info Box Left -->
            <div class="info-box">
                <h3 class="">
                    Das All-in-One-Prüftool für effiziente und einfache
                    Webseitenoptimierung
                </h3>

                <ul class="main-checklist">
                    <li>
                        <img src="@/assets/icons/checkmarkCircle.svg" />
                        <strong>Automatisiert & regelmäßig:</strong>
                        Alle Unterseiten analysiert
                    </li>
                    <li>
                        <img src="@/assets/icons/checkmarkCircle.svg" />
                        <strong>E-Mail-Benachrichtigungen:</strong>
                        Sobald ein Bericht bereit liegt
                    </li>
                    <li>
                        <img src="@/assets/icons/checkmarkCircle.svg" />
                        <strong>Barrierefreiheitsprüfung:</strong>
                        Orientiert an WCAG 2.1-Kriterien
                    </li>
                    <li>
                        <img src="@/assets/icons/checkmarkCircle.svg" />
                        <strong>10 Qualitätsprüfungen:</strong>
                        Technisch & rechtlich
                    </li>
                </ul>

                <div class="grid-checks">
                    <span>
                        <img src="@/assets/icons/checkmarkOutline.svg" />
                        Linkprüfung
                    </span>
                    <span>
                        <img src="@/assets/icons/checkmarkOutline.svg" />
                        Fehlermeldungen
                    </span>
                    <span>
                        <img src="@/assets/icons/checkmarkOutline.svg" />
                        Rechtliche Links
                    </span>
                    <span>
                        <img src="@/assets/icons/checkmarkOutline.svg" />
                        Lighthouse mobile & desktop
                    </span>
                    <span>
                        <img src="@/assets/icons/checkmarkOutline.svg" />
                        Metadaten
                    </span>
                    <span>
                        <img src="@/assets/icons/checkmarkOutline.svg" />
                        Grünes Hosting
                    </span>
                    <span>
                        <img src="@/assets/icons/checkmarkOutline.svg" />
                        robots.txt
                    </span>
                    <span>
                        <img src="@/assets/icons/checkmarkOutline.svg" />
                        Badware
                    </span>
                    <span>
                        <img src="@/assets/icons/checkmarkOutline.svg" />
                        Erreichbarkeit
                    </span>
                    <span>
                        <img src="@/assets/icons/checkmarkOutline.svg" />
                        <strong>Externe Schriften (Google Fonts)</strong>
                    </span>
                </div>
            </div>

            <!-- Right Side Graphic -->
            <div class="radar">
                <img
                    src="@/assets/webradarRadar.svg"
                    alt="Radar Graphic"
                />
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
    </section>
</template>

<style scoped>
.landing {
    width: 100%;
    padding: 80px 0;
    color: #2b2e30;
}

.landing-header {
    text-align: center;
    margin-bottom: 60px;
}
.landing-header h1 {
    font-size: 36px;
    font-weight: 700;
}
.landing-header p {
    font-size: 20px;
    margin-top: 10px;
    color: #4a4a4a;
}
.brand {
    color: #0f314b;
    font-weight: 700;
}

.content-wrapper {
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 60px;
    flex-wrap: nowrap;
}

.info-box {
    padding: 0;
    max-width: 800px;
    background: none;
    border: none;
    border-radius: 0;
    font-size: 20px;
}
.info-box h3 {
    font-size: 24px;
    font-weight: bold;
    color: #005670;
    margin-bottom: 20px;
}

.main-checklist {
    list-style: none;
    padding: 0;
    margin: 0;
}

.main-checklist li,
.grid-checks span {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    color: #3e3e3e;
}

.main-checklist img,
.grid-checks img {
    width: 24px;
    height: 24px;
}

.grid-checks {
    margin-top: 20px;
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 2px 12px;
    margin-left: 30px;
}

.cta {
    text-align: center;
    margin: 30px 0 0 0;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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

.discount {
    margin-top: 12px;
}

.subtitle {
    font-size: 20px;
    margin-top: 6px;
}

.radar img {
    width: 850px;
    max-width: 100%;
    display: block;
}

@media (max-width: 768px) {
    .landing {
        padding: 40px 15px;
    }
    
    .landing-header h1 {
        font-size: 28px;
    }
    
    .landing-header p {
        font-size: 16px;
    }
    
    .content-wrapper {
        flex-direction: column;
        text-align: center;
        gap: 30px;
    }
    
    .info-box {
        font-size: 16px;
    }
    
    .info-box h3 {
        font-size: 20px;
    }
    
    .grid-checks {
        grid-template-columns: 1fr;
        margin-left: 0;
    }
    
    .main-checklist li {
        align-items: flex-start;
        display: block;
        padding-left: 32px;
        position: relative;
    }
    
    .main-checklist li img {
        position: absolute;
        left: 0;
        top: 2px;
    }
    
    .main-checklist li strong {
        display: block;
        margin-bottom: 2px;
    }
    
    .radar {
        display: none;
    }
    
    .cta {
        font-size: 18px;
    }
    
    .cta-button-wrapper {
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
    
    .cta-btn, .cta-btn-outline {
        font-size: 18px;
        width: auto;
        min-width: 280px;
        max-width: 320px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .cta-button-wrapper a {
        display: flex;
        justify-content: center;
    }
    
    .subtitle {
        font-size: 16px;
    }
}
</style>
