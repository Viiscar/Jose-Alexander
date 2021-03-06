let langdata = {
    "languages": {
        "en": {
            "strings": {
                "home": "HOME",
                "portfolio": "PORTFOLIO",
                "nature": "nature",
                "portrait": "portrait",
                "events": "events",
                "drone": "drone",
                "request": "by"+String.fromCharCode(160)+"request",
                "about": "ABOUT",
                "contact": "CONTACT",
                "about1": "Hi! You will see here a sample of my work throughout the years, one that started as a hobby and ended up being my greatest expression and passion. It was not easy at first, but I had the best support ever from my wife Betzy, my inspiration and best role model. This work is dedicated to her memory because without her, this would not have been possible.",
                "about2": "All images were taken with a Nikon camera with Nikkor and Sigma lenses.",
                "about3": "I hope you enjoy it!",
                "subscribe": "Subscribe to my Instagram account where you will see daily images of this hobby that leads me to bring landscapes and moments to life through my lens.",
                "sent": "Email sent!",
                "wait": "We'll be in touch soon!",
                "internal": "Internal Error",
                "address": "Please send an e-mail to this address:",
                "notFound": "Page not found",
                "enterEmail": "Enter email address",
                "subject": "Subject:",
                "enterSubject" : "Enter subject",
                "message": "Message",
                "messageDetails": "Please include : locations of the project, amount of images needed, intended usage of the images, timeframe for project completion", 
                "submit": "Submit"
            }
        },
        "es": {
            "strings": {
                "home": "INICIO",
                "portfolio": "PORTFOLIO",
                "nature": "naturaleza"+String.fromCharCode(160),
                "portrait": "retrato",
                "events": "eventos",
                "drone": "dron",
                "request": "a"+String.fromCharCode(160)+"solicitud",
                "about": "ACERCA",
                "contact": "CONTACTO",
                "about1": "¡Hola! En este recorrido verán una muestra de mi trabajo a través de los años, uno que empezó como hobby y terminó siendo mi mayor expresión y pasión. No fue fácil al principio pero tuve el mejor apoyo jamás, el de mi esposa Betzy, mi inspiración y mejor modelo. Este proyecto va dedicado a su memoria, ya que sin ella esto no hubiera sido posible.",
                "about2": "Todas las imágenes fueron tomadas con cámara Nikon con lentes Nikkor y Sigma.",
                "about3": "¡Espero que las disfruten!",
                "subscribe": "Subscríbete a mi canal en Instagram donde verás imágenes a diario de este pasatiempo que me lleva a darle vida a paisajes e instantes mediante mi lente.",
                "sent": "¡Mensaje enviado!",
                "wait": "¡Espere una respuesta muy pronto!",
                "internal": "Error interno",
                "address": "Envíe un e-mail a esta dirección:",
                "notFound": "La página no se encontró",
                "enterEmail": "Insertar la dirección de e-mail",
                "subject": "Asunto:",
                "enterSubject" : "Insertar Asunto",
                "message": "Mensaje",
                "messageDetails": "Por favor incluya: ubicaciones del proyecto, cantidad de imágenes necesarias, uso previsto de las imágenes, plazo para la finalización del proyecto", 
                "submit": "Enviar"
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
            let lang = findLocaleMatch();
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
    storage ?  lang = storage: lang = findLocaleMatch();

    let langToChange = document.getElementsByClassName("langToChange");
    for (i=0; i<langToChange.length; i++){

        langToChange[i].setAttribute("lang", lang)
        
        langToChange[i].classList.add('lang-match');
    }

    let zones = document.querySelectorAll('html [lang]');
    applyStrings(zones,lang);
}

//Changes language
function applyStrings(containers, lang) {
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
        
        container.querySelectorAll(`[data-placeholderKey]`).forEach(element => {
            //find all the elements that have data-placeholderKey
            let placeholderKey = element.getAttribute('data-placeholderKey');
            console.log(element)
            let lang = locale.substr(0, 2); //first 2 characters

            if (placeholderKey) {
                console.log("oui")
                element.placeholder = langdata.languages[lang].strings[placeholderKey];
            }
        });
    })

    //Changes the en/esp button color
    let langBtn = document.getElementById("lang-button");

    if(lang==="en"){
        console.log("anglais", lang);
        langBtn.childNodes[0].classList.add("lang-color");
        langBtn.childNodes[2].classList.remove("lang-color");
    }else{
        console.log("espagnol");
        langBtn.childNodes[2].classList.add("lang-color");
        langBtn.childNodes[0].classList.remove("lang-color");
    }
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
    applyStrings(zones, lang);
}