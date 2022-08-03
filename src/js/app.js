const burger = document.querySelector('.header__burger');
const html = document.documentElement;

burger.addEventListener('click', (evt) => {
    evt.preventDefault();
    html.classList.toggle('menu-open');
});
