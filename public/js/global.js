//Show portfolio sections on nav
function showPortfolio(){
  //If it's a small device do nothing
  if(window.matchMedia("(max-width: 733px)").matches){

  }else{
    let portfolio = document.getElementById("portfolio");
    portfolio.style.display = "block";

   //set windows width to call function translateX
   let wind1270px = window.matchMedia("(max-width: 1270px)");
   let wind760px = window.matchMedia("(max-width: 760px)");
    translateX(wind1270px,wind760px); // Call listener function at run time
    wind1270px.addListener(translateX) // Attach listener function on state changes
  }
    
}

//Tranlates Contact & About to the left at 1270px window width
function translateX(wind1270px,wind760px) {  //760px

  let contactAbout = document.getElementsByClassName("contactAbout");
  let navLinks = document.getElementById("navLinks");
  let logo = document.getElementById("logo");

  if (wind1270px.matches) { // If media query matches
    logo.style.transform= "translateX(2.8rem)";
    contactAbout[0].style.transform= "translateX(-10rem)";
    contactAbout[1].style.transform= "translateX(-10rem)";
    contactAbout[2].style.transform= "translateX(-10rem)";
    contactAbout[3].style.transform= "translateX(-10rem)";
    navLinks.style.transform= "translateX(5.8rem)";
  } else if (wind760px.matches) { // If media query matches
    contactAbout[0].style.transform= "translateX(-9rem)";
    contactAbout[1].style.transform= "translateX(-9rem)";
    contactAbout[2].style.transform= "translateX(-9rem)";
    contactAbout[3].style.transform= "translateX(-9rem)";
    navLinks.style.transform= "translateX(7rem)";
  }else {
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

//Portfolio nav links are visible at 1270px width and more for portfolio paths
if(window.matchMedia("(min-width: 1270px)").matches){
  let currentPath = window.location.pathname;
  if(currentPath === "/portrait.html" || currentPath === "/nature.html" || currentPath === "/events.html" || currentPath === "/byRequest.html" || currentPath === "/drone.html"){
    let portfolio = document.getElementById("portfolio");
    portfolio.style.display = "block";
  }
}

//Small devices Menu
function menuIcon(){

  let errorMessage = document.getElementsByClassName("error");
  let navLinks = document.getElementById("navLinks");
  let navContainer = document.getElementById("navContainer");
  let portfolio = document.getElementById("portfolio");

  if (navContainer.className === "index-grid-item") {
    navLinks.style.display="block";
    errorMessage.length ? errorMessage[0].style.display="none" : "";
    navLinks.style.marginBottom="0px";
    navLinks.children[0].style.marginTop="3.2rem";
    navContainer.className += " responsive";
    portfolio.classList.remove("portfolio");

  } else {
    navLinks.style.display="none";
    errorMessage.length ? errorMessage[0].style.display="block" : "";
    navContainer.className = "index-grid-item";
    portfolio.classList.add("portfolio")
  }
}