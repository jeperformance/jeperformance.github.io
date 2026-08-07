const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
}

// Wait 2 seconds before starting
setTimeout(() => {
  setInterval(showNextSlide, 1000);
}, 2000);
