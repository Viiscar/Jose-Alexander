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

prevBtn.style.display = "none";

//Carousel at work 
function carousel() {

  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  if (counter >= slides.length){
    counter = 0;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

//Event on buttons click
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});