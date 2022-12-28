const btnMenuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.primary-navigation');

btnMenuToggle.addEventListener('click', () => {
  const isOpened = btnMenuToggle.getAttribute('aria-expanded') === "true";
  if (isOpened ? closeMenu() : openMenu());
});

function openMenu() {
  btnMenuToggle.setAttribute('aria-expanded', "true");
  siteNavigation.setAttribute('data-state', "opened");
}
function closeMenu() {
  btnMenuToggle.setAttribute('aria-expanded', "false");
  siteNavigation.setAttribute('data-state', "closed");
}