let menuToggle = document.querySelector('.menu-button');
let navigation = document.querySelector('.navigation');

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle('active')
});
