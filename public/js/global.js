//Show portfolio sections on nav
function showPortfolio(){
    let portfolio = document.getElementById("portfolio");
    portfolio.style.display = "block";

    //set windows width to call function
    var x = window.matchMedia("(max-width: 1668px)")
    translateX(x);
    x.addListener(translateX)
  }

//Tranlates Contact & About to the left
function translateX(x) {

  let contactAbout = document.getElementsByClassName("contactAbout");

  if (x.matches) { // If media query matches
    contactAbout[0].style.transform= "translateX(-9.5rem)";
    contactAbout[1].style.transform= "translateX(-9.5rem)";
  } else {
    contactAbout[0].style.transform= "translateX(0rem)";
    contactAbout[1].style.transform= "translateX(0rem)";
  }
}


