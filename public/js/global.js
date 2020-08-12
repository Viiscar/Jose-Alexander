//Show portfolio sections on nav
function showPortfolio(){
    let portfolio = document.getElementById("portfolio");
    portfolio.style.display = "block";

    //set windows width to call function translateX
    var wind1668px = window.matchMedia("(max-width: 1668px)")
    translateX(wind1668px); // Call listener function at run time
    wind1668px.addListener(translateX) // Attach listener function on state changes
  }

//Tranlates Contact & About to the left at 1668px window width
function translateX(wind1668px) {

  let contactAbout = document.getElementsByClassName("contactAbout");
  let navLinks = document.getElementById("navLinks");

  if (wind1668px.matches) { // If media query matches
    contactAbout[0].style.transform= "translateX(-9.5rem)";
    contactAbout[1].style.transform= "translateX(-9.5rem)";
    navLinks.style.transform= "translateX(7rem)";
  } else {
    contactAbout[0].style.transform= "translateX(0rem)";
    contactAbout[1].style.transform= "translateX(0rem)";
    navLinks.style.transform= "translateX(0rem)";
  }
}

//Change Logo at 991px window width
function changeLogo(wind991px) {

  let logo = document.getElementById("logo");
  let logoContainer = document.getElementById("logoContainer");
 
  if (wind991px.matches) { // If media query matches
    logo.remove();
    logoContainer.innerHTML='<img src="Images/logo-mini.jpg" id="logo" />';

  } else {
    logo.remove();
    logoContainer.innerHTML='<img src="Images/logo.jpg" id="logo" />';
  }
}
//set windows width to call function changeLogo
var wind991px = window.matchMedia("(max-width: 991px)")
changeLogo(wind991px) // Call listener function at run time
wind991px.addListener(changeLogo) // Attach listener function on state changes