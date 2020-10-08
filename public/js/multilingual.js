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
             setLanguage(parsedLang);
        }
    }else{//if there is no Storage feature
        setLanguage();
    }
   
});

//Setting language on load
function setLanguage(storage){
    
    let lang;
    storage ?  lang = storage: lang = findLocaleMatch()

    let langToChange = document.getElementsByClassName("langToChange");
    for (i=0; i<langToChange.length; i++){

        langToChange[i].setAttribute("lang", lang)
        
        langToChange[i].classList.add('lang-match');
        //changeLang.length === 0 ? i++ : "";
    }

    let zones = document.querySelectorAll('html [lang]');
    applyStrings(zones);
}

//Changes language
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

//Defines Language to use
function findLocaleMatch() {
    let keys = Object.keys(langdata.languages); //from our data
    let locales = Intl.getCanonicalLocales(keys); //from our data validated
    let lang = navigator.language; //from browser 
    let locale = Intl.getCanonicalLocales(lang); //from browser validated

    //find the match for locale inside locales
    let langMatch = document.documentElement.getAttribute('lang'); //default
    locales = locales.filter(l => locale == l);
    langMatch = (locales.length > 0) ? locales[0] : langMatch;
    return langMatch;
}

//Changes Language on click
function changeLang(){

    //Changing language
    let langToChange = document.getElementsByClassName("langToChange");
    let previousLang = langToChange[0].getAttribute("lang");
    let lang;
    previousLang === "es" ? lang = "en" : lang = "es";

    //Set language selection in localStorage
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("lang", JSON.stringify(lang));
    }
    
    for (i=0; i<langToChange.length; i++){
        langToChange[i].setAttribute("lang", lang)
    }

    let zones = document.querySelectorAll('html [lang]');
    applyStrings(zones);
    
}