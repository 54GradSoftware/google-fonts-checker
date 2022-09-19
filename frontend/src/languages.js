export const messages = {
  'en-US': {
    localeName: 'en',
    search: {
      headline: 'Check your site for Google Fonts',
      whyNotToUse: 'Why not to use Google Fonts?',
      placeholder: 'https://your.domain',
    },
    result: {
      headline: 'Result:',
      noticeTrue: 'Google Fonts detected!',
      noticeFalse: 'We have not detected any external use of Google Fonts :D',
      list: {
        headline: 'Found in the following Requests:',
      },
      copy: {
        headline: 'Share result:',
        button: 'Copy URL',
      },
      tracker: {
        GoogleFonts: {
          headline: 'Why not to use Google Fonts?',
          section1:
            'Google Fonts loads the fonts from the Google CDN by default.' +
            'Some information - like your IP and the visited website - will be transmitted to Google.\n' +
            'Therefore the use of Google Fonts mostly conflicts with the DSGVO.\n',
          learnMore: 'learn more',
        },
        GoogleRecaptcha: {
          headline: 'Why not to use Google reCAPTCHA?',
          section1:
            'Google reCAPTCHA tracks the user interaction with the site and also loads fonts from the Google CDN.\n' +
            'Some information - like your IP and the visited website - will be transmitted to Google.\n' +
            'Therefore the use of Google reCAPTCHA/Google Fonts mostly conflicts with the DSGVO.',
          learnMore: 'learn more',
        },
        GoogleMaps: {
          headline: 'Why not to use Google Maps?',
          section1:
            'Google Maps tracks the user interaction with the site and also loads fonts from the Google CDN.\n' +
            'Some information - like your IP and the visited website - will be transmitted to Google.\n' +
            'Therefore the use of Google Maps/Google Fonts mostly conflicts with the DSGVO.',
          learnMore: 'learn more',
        },
      },
    },
    whyNotToUse: {
      headline: 'Why not to use Google Fonts?',
      box1: {
        section1:
          'By default Google Fonts loads the required fonts from the Google CDN.\n' +
          'By doing this some information gets sent to Google. For example:',
        section2: {
          1: 'your ip-address',
          2: 'the site you visited',
          3: 'the device and model used',
          4: 'your browser name and version.',
        },
        section3:
          'Therefore Google is able to create a user profile of you and f/e/ show relevant ads.\n' +
          'That\'s why the use of Google Fonts mostly conflicts with the DSGVO.',
      },
      box2: {
        headline: 'How to use Google Fonts without tracking and DSGVO compliant?',
        section1: {
          1:
            'You can host the required Fonts yourself with little effort.\n' +
            'This can also result in better site and loading performance.\n' +
            'There is an online tool to simplify this process:\n',
          2:
            'First you\'ll have to select all fonts required.\n' +
            'Then a CSS-file will be generated which you can implement in your site -\n' +
            'Doing so you can set a folder-prefix, where the fonts should be stored later on.\n' +
            'Now you\'ll have to download the zip-file with the required fonts, extract it ' +
            'und in den Webspace hochgeladen werden. Zum Beispiel mit einem FTP-Client.\n' +
            'and upload the fonts to your webspace. For example with a ftp-client.\n' +
            'If you\'re using git in your project, just add those fonts to you project.',
        },
      },
      box3: {
        headline: 'Others',
        section1:
          'If you want to check your site for more vulnerabilities, \n' +
          'you could use this tool:',
      }
    },
    footer: {
      madeWithLove: 'Made with {icon} by',
      imprint: 'imprint',
      privacyNotice: 'privacy notice',
    },
  },
  'de-DE': {
    localeName: 'de',
    search: {
      headline: 'Überprüfe deine Seite nach Google Fonts',
      whyNotToUse: 'Warum keine Google Fonts verwenden?',
      placeholder: 'https://deine.domain',
    },
    result: {
      headline: 'Ergebnis:',
      noticeTrue: 'Google Fonts wurden erkannt!',
      noticeFalse: 'Wir haben keine externe Nutzung von Google Fonts erkannt :D',
      list: {
        headline: 'Gefunden in den folgenden Anfragen:',
      },
      copy: {
        headline: 'Ergebnis teilen:',
        button: 'URL kopieren',
      },
      tracker: {
        GoogleFonts: {
          headline: 'Warum keine Google Fonts verwenden?',
          section1:
            'Google Fonts lädt standardmäßig die Schriftarten von der Google CDN.' +
            'Einige Daten - wie z.B. deine IP-Adresse und die aufgerufene Website - werden dabei an Google übermittelt.\n' +
            'Dadurch verstößt die Nutzung von Google Fonts je nach Anwendungsfall meist gegen die DSGVO.\n',
          learnMore: 'mehr erfahren',
        },
        GoogleRecaptcha: {
          headline: 'Warum kein Google reCAPTCHA verwenden?',
          section1:
            'Google reCAPTCHA trackt das Nutzungsverhalten des Users auf der Webseite und lädt standardmäßig die Schriftarten von der Google CDN.' +
            'Einige Daten - wie z.B. deine IP-Adresse und die aufgerufene Website - werden dabei an Google übermittelt.' +
            'Dadurch verstößt die Nutzung von Google reCAPTCHA/Google Fonts je nach Anwendungsfall meist gegen die DSGVO.',
          learnMore: 'mehr erfahren',
        },
        GoogleMaps: {
          headline: 'Warum kein Google Maps verwenden?',
          section1:
            'Google Maps trackt das Nutzungsverhalten des Users auf der Webseite und lädt standardmäßig die Schriftarten von der Google CDN.' +
            'Einige Daten - wie z.B. deine IP-Adresse und die aufgerufene Website - werden dabei an Google übermittelt.' +
            'Dadurch verstößt die Nutzung von Google Maps/Google Fonts je nach Anwendungsfall meist gegen die DSGVO.',
        },
      },
    },
    whyNotToUse: {
      headline: 'Warum keine Google Fonts verwenden?',
      box1: {
        section1:
          'Google Fonts lädt standardmäßig die Schriftarten von der Google CDN.\n' +
          'Dabei werden einige Daten an Google übermittelt. So zum Beispiel:',
        section2: {
          1: 'deine IP-Adresse',
          2: 'die aufgerufene Webseite',
          3: 'das verwendete Gerät bzw. Modell',
          4: 'der verwendete Browser',
        },
        section3:
          'Dadurch kann Google ein Nutzerprofil von dir anlegen und zum Beispiel relevante Werbung anzeigen.\n' +
          'Dadurch verstößt die Nutzung von Google Fonts je nach Anwendungsfall meist gegen die DSGVO.',
      },
      box2: {
        headline: 'Wie kann ich Google Schriftarten ohne Tracking und DSGVO-Konform benutzen?',
        section1: {
          1:
            'Die Google Schriftarten können mit wenig Aufwand auch selbständig gehostet werden.\n' +
            'Dadurch kann sich zusätzlich sogar die Performance der Webseite verbessern.\n' +
            'Um die Google Schriftarten einzubinden, gibt es ein Online-Tool, welches diesen Prozess erleichtert:\n',
          2:
            'Hier müssen zunächst alle Typen ausgewählt werden, die benötigt werden.\n' +
            'Darauf wird ein CSS-File generiert, welches auf der eigenen Seite eingebunden werden muss. -\n' +
            'Dabei lässt sich der Ordner-Präfix festlegen, wo die Schriftarten später gespeichert werden sollen.\n' +
            'Jetzt muss nur noch die Zip-Datei mit den Schriftarten heruntergeladen\n' +
            'und in den Webspace hochgeladen werden. Zum Beispiel mit einem FTP-Client.\n' +
            'Bei der Verwendung von Git müssen die Schriften einfach zum Projekt hinzugefügt werden.',
        },
      },
      box3: {
        headline: 'Sonstiges',
        section1:
          'Wenn du deine Website noch auf weitere Schwachstellen testen möchtest,\n' +
          'kannst du folgendes Open Source Tool benutzen: ',
      }
    },
    footer: {
      madeWithLove: 'Made with {icon} by',
      imprint: 'Impressum',
      privacyNotice: 'Datenschutz',
    }
  },
};
