let tabButtonEvents = document.querySelector('.tab__events');
let tabButtonAuditory = document.querySelector('.tab__auditory');
let tabButtonHistory = document.querySelector('.tab__history');

let currentTab = 'tab__item--current';

let formActive = document.querySelector('.form__control');
let auditionActive = document.querySelector('.form__audit');
let historyActive = document.querySelector('.form__history');

tabButtonEvents.onclick = function () {
    tabButtonAuditory.classList.remove(currentTab);
    tabButtonHistory.classList.remove(currentTab);

    tabButtonEvents.classList.add(currentTab);
    formActive.classList.add('form--active');
    auditionActive.classList.remove('form--active');
    historyActive.classList.remove('form--active');

}

tabButtonAuditory.onclick = function () {
    tabButtonHistory.classList.remove(currentTab);
    tabButtonEvents.classList.remove(currentTab);

    tabButtonAuditory.classList.add(currentTab);

    auditionActive.classList.add('form--active');

    formActive.classList.remove('form--active');
    historyActive.classList.remove('form--active');
}

tabButtonHistory.onclick = function () {
    tabButtonAuditory.classList.remove(currentTab);
    tabButtonEvents.classList.remove(currentTab);

    tabButtonHistory.classList.add(currentTab);

    historyActive.classList.add('form--active');

    formActive.classList.remove('form--active');
    auditionActive.classList.remove('form--active');
}


let controller = document.querySelector('.page-main__control-button');
let sidebar = document.querySelector('.sidebar')

controller.onclick = function () {
    sidebar.classList.toggle('sidebar--active');
}

let accordeonSidebar = document.querySelector('.sidebar__item-title--portfolio');
let hideList = document.querySelector('.sidebar__portfolio--disable');
let listAble = 'sidebar__portfolio--disable';

accordeonSidebar.onclick = function () {
    hideList.classList.toggle(listAble);
}

let detalisationButton = document.querySelector('.form__button-add');
let detalisationMenu = document.querySelector('.detalisation');

detalisationButton.onclick = function () {
    detalisationMenu.classList.toggle('detalisation--full');
    detalisationButton.classList.toggle('form__button-add--open');
}

let formCompositionButton = document.querySelector('.form__composition-add');
let formCompositionMenu = document.querySelector('.composition');

formCompositionButton.onclick = function () {
    formCompositionButton.classList.toggle('form__composition-add--open');
    formCompositionMenu.classList.toggle('composition--active');
}

