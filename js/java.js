const navMenu = document.querySelector('.nav__menu'),
    header = document.querySelector('header');

navMenu.onclick = function () {
    header.classList.toggle('active')
}