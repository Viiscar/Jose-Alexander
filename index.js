//Selecting slides and buttons
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

//Initialising images counter to 0
let counter = 0;

//Defining left style for each slide
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

//Carousel at work 
function carousel() {

  if (counter >= slides.length){
    counter = 0;
  }

  if (counter <= -1){
    counter = slides.length -1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

//Slider buttons Onclick
function next(){
  counter++;
  carousel();
}

function prev(){
  counter--;
  carousel();
}

//Show portfolio sections on nav
function showPortfolio(){
  console.log("portfolio")
}