<script setup>
import { ref } from 'vue';
import plusFilled from '@/assets/icons/plusFilled.svg';
import plusOutline from '@/assets/icons/plusOutline.svg';

const faqItems = ref([
    {
        question: 'Wofür braucht es Schriftarten auf Webseiten?',
        answer: `
          Webseiten benötigen Schriftarten, um ihren Textinhalt sichtbar darzustellen. Schriftarten sind Sammlungen von Zeichen, Buchstaben und Symbolen, die in einem bestimmten Stil und Designgestaltet sind. Sie bestimmen, wie Texte auf dem Bildschirm erscheinen. <br><br>
          Zwar könnten Webseiten auch die Standardschriftarten eines Computers oder Smartphones verwenden, dadurch wäre das Erscheinungsbild jedoch nicht mehr einheitlich, und es ließen sich keine gestalterischen Akzente mehr setzen. Insbesondere für den Wiedererkennungswert einer Marke spielt die Definition von Typografien eine große Rolle.
        `,
        open: false
    },
    {
        question: 'Gibt es Alternativen zu Google Fonts?',
        answer: `
          Ja. Neben Google Fonts gibt es auch weitere Anbieter von Schriftarten, die sich für Webseiten nutzen lassen – einige davon sind kostenfrei, andere kostenpflichtig. Unabhängig davon, woher die Schriftart stammt, ist es in der Regel sicherer und datenschutzfreundlicher, die Schriftdateien selbst zu hosten, also direkt auf dem eigenen Server zu speichern und von dort einzubinden. <br><br>
          So lässt sich das Design deiner Website individualisieren und gleichzeitig werden keine Daten an externe Dienste übermittelt.
        `,
        open: false
    },
    {
        question:
            'Was sollte ich tun, wenn ich eine Abmahnung wegen Google Fonts erhalten habe?',
        answer: `
        <i>Hinweis: Diese Informationen stellen keine Rechtsberatung dar.</i><br><br>
        Zunächst gilt: Ruhe bewahren. Eine Abmahnung wegen der Nutzung von Google Fonts bedeutet nicht automatisch,dass die Forderung berechtigt ist.Viele der im Umlauf befindlichen Schreiben wurden massenhaft und automatisiert versendet, mit dem Ziel, Betroffene zu verunsichern und zu schnellen Zahlungen zu bewegen. <br><br>
        Am besten ist es, sich über den konkreten Vorwurf zu informieren und – wenn nötig – juristischen Rat einzuholen, um den Einzelfall prüfen zu lassen. Nach dem Urteil des Landgerichts München vom 30. März 2024 wurde den automatisiert versendeten Abmahnschreiben ein Riegel vorgeschoben. Das Gericht stellte klar, dass solche Massenabmahnungen eine missbräuchliche Nutzung des Rechts darstellen und daraus keine Ansprüche wie Schmerzensgeld abgeleitet werden können. <br><br>
        Unabhängig davon ist es ratsam, keine extern eingebundenen Google Fonts mehr zu verwenden, sondern Schriftarten <a href="#lokal">lokal auf dem eigenen Server einzubinden</a>, um Datenschutzrisiken und Abmahnungen künftig zu vermeiden.
        `,
        open: false
    },
    {
        question: 'Habe ich Nachteile, wenn ich Google Fonts nicht verwende?',
        answer: `
          Nein hat es nicht. Du kannst selber entscheiden wie du deine Schriftarten pflegst.        `,
        open: false
    },
    {
        question:
            'Wie kann ich feststellen, ob meine Webseite Google Fonts verwendet?',
        answer: `
          Dafür haben wir den Google Fonts Checker entwickelt. Gib einfach oben die <a href="#urlInput">zu prüfende URL ein</a> – unser Tool analysiert die angegebene Webseite und zeigt dir, ob Google Fonts extern eingebunden sind. <br><br>
          <i>Hinweis:</i> Unser Checker analysiert nur die konkrete Seite und keine weiteren Unterseiten der Domain. Für einen automatisierten Rundum-Check vollständiger Webanwendung bieten wir unser Qualitätsprüftool <a href="https://webrad.ar" target="_blank">webrad.ar</a> an.

        `,
        open: false
    },
    {
        question: 'Warum habt ihr den Google Fonts Checker gebaut?',
        answer: `
          Wir, die 54 Grad Software GmbH, haben in Gesprächen mit vielen Kund*innen festgestellt, dass es rund um die Einbindung externer Inhalte auf Webseiten häufig Unsicherheiten gibt. Als Webentwickler*innen können wir relativ leicht herausfinden, welche externen Verbindungen bestehen – doch für viele Betreiber*innen ist das nicht ohne Weiteres möglich. <br><br>
          Zudem werden Google Fonts in zahlreichen WordPress-Themes und anderer Standardsoftware automatisch integriert. Um hier Transparenz zu schaffen und die Überprüfung zu erleichtern, haben wir dieses kleine Tool entwickelt und kostenlos zur Verfügung gestellt. <br><br>
          Wir freuen uns sehr, dass das Projekt bereits über 400.000 mal genutzt wurde. Für Feedback, Ideen oder Fragen kannst du uns gerne eine <a href="mailto:kontakt+gfc@54gradsoftware.de">E-Mail</a> schicken.
        `,
        open: false
    },
    {
        question: 'Lizenz & Transparenz',
        answer: `
          Der Quellcode des Google Fonts Checker ist in unserem <a href="https://github.com/54GradSoftware/google-fonts-checker" target="_blank">Git Repository</a> öffentlich einsehbar und steht unter der Business Source License 1.1 (BSL). Das bedeutet: Der Code ist transparent und nachvollziehbar. `,
        open: false
    },
    {
        question: 'Was ist die 54 Grad Software GmbH?',
        answer: `
          Seit 2020 entwickeln wir mit Sitz in Flensburg individuelle Softwarelösungen für Unternehmen aus verschiedensten Branchen. Was all unsere Kund*innen verbindet, ist der Wunsch nach qualitativ hochwertigen und passgenauen Webanwendungen. <br><br>
          Unsere Mission bei <a href="https://54gradsoftware.de" target="_blank">54 Grad Software</a> ist es, Branchen nachhaltig weiterzuentwickeln – mit norddeutscher Leichtigkeit, jahrelanger Expertise und einem klaren Fokus auf Innovation und Transparenz. Wir entwickeln maßgeschneiderte Softwarelösungen, die Unternehmen dabei unterstützen, agiler und zukunftsfähiger zu werden.
        `,
        open: false
    }
]);

const toggle = (index) => {
    faqItems.value[index].open = !faqItems.value[index].open;
};
</script>

<template>
    <div class="card">
        <h2>FAQ</h2>
        <p class="subheading">Häufig gestellte Fragen</p>

        <div class="faq-list">
            <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
                <button class="faq-header" @click="toggle(index)" :aria-expanded="item.open">
                    <img :src="item.open ? plusFilled : plusOutline" class="icon"
                        :alt="item.open ? 'Schließen' : 'Öffnen'" />
                    <span>{{ item.question }}</span>
                </button>

                <transition name="accordion">
                    <div v-if="item.open" class="faq-content" v-html="item.answer" />
                </transition>

                <hr class="divider" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.subheading {
    font-size: 24px;
    margin-bottom: 3rem;
    text-align: center;
    color: #444;
}

.faq-item {
    width: 100%;
}

.faq-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 22px;
    font-weight: 600;
    background: none;
    border: none;
    text-align: left;
    padding: 1rem 0;
    cursor: pointer;
}

.faq-header span {
    flex: 1;
}

.icon {
    width: 26px;
    height: 26px;
    flex-shrink: 0;
}

.faq-content {
    font-size: 18px;
    color: #333;
    padding: 0.5rem 2rem 1.5rem 3.1rem;
}

.divider {
    opacity: 0.3;
    margin: 0.5rem 0 1rem;
}

.accordion-enter-active,
.accordion-leave-active {
    transition: max-height 0.25s ease, opacity 0.25s ease;
}

.accordion-enter-from,
.accordion-leave-to {
    max-height: 0;
    opacity: 0;
}

.accordion-enter-to {
    max-height: 500px;
    opacity: 1;
}
</style>
