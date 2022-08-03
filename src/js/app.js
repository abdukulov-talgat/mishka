const burger = document.querySelector('.header__burger');
const html = document.documentElement;

burger.addEventListener('click', () => {
    html.classList.toggle('menu-open');
});
