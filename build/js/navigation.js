let menuButton = document.querySelector('.navigation__button');
let menuElement = document.querySelector('.navigation');

menuButton.onclick = function () {
    if (menuButton.classList.contains('navigation__button--open')) {
        menuButton.classList.add('navigation__button--close');
        menuButton.classList.remove('navigation__button--open');
        menuElement.classList.add('navigation--open');
    } else if (menuButton.classList.contains('navigation__button--close')) {
        menuButton.classList.remove('navigation__button--close');
        menuButton.classList.add('navigation__button--open');
        menuElement.classList.remove('navigation--open');
    }
}
