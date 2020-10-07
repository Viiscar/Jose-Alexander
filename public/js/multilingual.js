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
    if (typeof(Storage) !== "undefined") {
        // If localStorage is empty
        if(localStorage.length === 0){
            setLanguage();
            localStorage.setItem("lang", JSON.stringify(lang));
        }else{//If localStorage is full
             const lang = localStorage.getItem('lang');
             const parsedLang = JSON.parse(lang);
             console.log("parsedLang",parsedLang);
             setLanguage(parsedLang);
        }
    }else{//if there is no Storage feature
        setLanguage();
    }
   
});

//Setting language on load
function setLanguage(storage){
    let zones = document.querySelectorAll('html [lang]');
    applyStrings(zones);
    let lang;
    storage ?  lang = storage: lang = findLocaleMatch()
    let container = document.querySelector(`html [lang*=${lang}]`);
    console.log(container);
    container.className = 'lang-match';
}

function applyStrings(containers) {
    containers.forEach(container => {
        //find all the elements that have data-key
        let locale = container.getAttribute('lang');
        container.querySelectorAll(`[data-key]`).forEach(element => {
            let key = element.getAttribute('data-key');
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
    //find the match for locale inside locales
    let langMatch = document.documentElement.getAttribute('lang'); //default
    locales = locales.filter(l => locale == l);
    langMatch = (locales.length > 0) ? locales[0] : langMatch;
    return langMatch;
}

function changeLang(lang){
    //Set language selection in localStorage
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("lang", JSON.stringify(lang));
    }
    //Changing language
    let displayedLanguage =  document.getElementsByClassName('lang-match');
    displayedLanguage[0].classList.remove("lang-match");
    let container = document.querySelector(`html [lang*=${lang}]`);
    container.className = 'lang-match';
}