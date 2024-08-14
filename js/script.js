const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
});

let menu = document.querySelector('.header__menu-icon i');
let navbar = document.querySelector('.navbar__list');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

window.addEventListener('scroll', () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
});
