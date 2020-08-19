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
    contactAbout[0].style.transform= "translateX(-11.5rem)";
    contactAbout[1].style.transform= "translateX(-11.5rem)";
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

//Small devices Menu
function menuIcon(){
  // let navLinks = document.getElementById("navLinks");
  // navLinks.style.display="flex";
  // navLinks.style.flexDirection="column"
  // document.body.style.backgroundColor="blue";
  // document.body.style.zIndex="7";

  let navLinks = document.getElementById("navLinks");
  let navContainer = document.getElementById("navContainer");
  console.log(navLinks.children[0])
  if (navContainer.className === "index-grid-item") {
    navLinks.style.display="block";
    navLinks.style.marginBottom="0px";
    navLinks.children[0].style.marginTop="3.2rem";
    // navLinks.firstChild.firstChild.style.backgroundColor="blue";
    navContainer.className += " responsive";
    //premier li  margin-top: 3rem;

  } else {
    navLinks.style.display="none";
    navContainer.className = "index-grid-item";
  }

}

//portfolio margintop 0, transform tranlatex(0)
// porfolio li backgoung-color inerit
// premier et dernier li border top/bottom radius
// transform tranlatex(0)

// #portfolio li{
//   background-color: #FAB863;
//   color: white;
//   padding-left: 1rem;
//   padding-right: 1rem;
// }

// #portfolio li:first-child {
//   padding-top: 0.5rem;
//   border-top: 2px solid #F9B358;
//   border-top-left-radius: 8px;
//   border-top-right-radius: 8px;
// }

// #portfolio li:last-child {
//   padding-bottom: 0.5rem;
//   border-bottom: 2px solid #F9B358;
//   border-bottom-left-radius: 8px;
//   border-bottom-right-radius: 8px;
// }

//menu hover machin truc