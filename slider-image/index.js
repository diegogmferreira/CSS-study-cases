let next = document.querySelector('.slider-next');
let prev = document.querySelector('.slider-prev');

let slider = document.querySelector('.slider');

next.addEventListener('click', () => {
  let slides = document.querySelectorAll('.slides');
  slider.appendChild(slides[0]);
});

prev.addEventListener('click', () => {
  let slides = document.querySelectorAll('.slides');
  slider.prepend(slides[slides.length - 1]);
});