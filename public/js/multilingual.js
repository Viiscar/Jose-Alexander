let langdata = {
    "languages": {
        "en": {
            "strings": {
                "home": "HOME",
                "portfolio": "PORTFOLIO",
                "nature": "nature",
                "portrait": "portrait",
                "events": "events",
                "request": "by request",
                "about": "ABOUT",
                "contact": "CONTACT"
            }
        },
        "es": {
            "strings": {
                "home": "INICIO",
                "portfolio": "PORTFOLIO",
                "nature": "naturaleza",
                "portrait": "retrato",
                "events": "evento",
                "request": "solicitud",
                "about": "CONOCEME",
                "contact": "CONTACTO"
            }
        }
    }
}

  //apply the language values to the content
  document.addEventListener('DOMContentLoaded', () => {
    //skip the lang value in the HTML tag for this example
    let zones = document.querySelectorAll('html [lang]');
    applyStrings(zones);

    let lang = findLocaleMatch();
    let container = document.querySelector(`html [lang*=${lang}]`);
    console.log(container);
    container.className = 'lang-match';
});

function applyStrings(containers) {
    containers.forEach(container => {
        //find all the elements that have data-key
        let locale = container.getAttribute('lang');
        //console.log('looking inside of ', locale);
        container.querySelectorAll(`[data-key]`).forEach(element => {
            let key = element.getAttribute('data-key');
            //console.log(element);
            //console.log(key);
            let lang = locale.substr(0, 2); //first 2 characters
            if (key) {
                element.textContent = langdata.languages[lang].strings[key];
            }
        });
    })
}

function findLocaleMatch() {
    let keys = Object.keys(langdata.languages); //from our data
    let locales = Intl.getCanonicalLocales(keys); //from our data validated

    let lang = navigator.language; //from browser 
    let locale = Intl.getCanonicalLocales(lang); //from browser validated
    console.log('browser language', lang);
    console.log('locales from data file', locale);
    lang = "de";
    locale="de";
    //find the match for locale inside locales
    let langMatch = document.documentElement.getAttribute('lang'); //default
    locales = locales.filter(l => locale == l);
    langMatch = (locales.length > 0) ? locales[0] : langMatch;
    return langMatch;
}