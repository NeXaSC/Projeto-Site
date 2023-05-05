const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
let slideIndex = 0;

function moveSlides() {
  const slideWidth = slider.clientWidth;
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
  if (slideIndex < 2) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  moveSlides();
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = 2;
  }
  moveSlides();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

window.addEventListener('resize', () => {
  moveSlides();
});

setInterval(nextSlide, 5000);