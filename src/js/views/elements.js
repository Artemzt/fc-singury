export const elements = {
    html: document.querySelector('html'),
    body: document.querySelector('body'),
    header: document.querySelector('header'),
};

export const elementStrings = {
    inactive: 'inactive',
    preventScroll: 'prevent-scroll',
    // burger
    burgerActive: 'burger-active',
};

export const getElement = {
    spinner: () => document.getElementById('spinner'),
    animatedButtons: () => document.querySelectorAll('.fn-year-link'),

    // header
    headerSection: () => document.querySelector('.top-header__container'),

    // burger menu elements
    burgerButton: () => document.querySelector('.burger-button'),
    burgerMenu: () => document.querySelector('.burger-menu'),

    // history section
    historySection: () => document.querySelector('.section-history'),
    historyYearsBlock: () => document.getElementById('years-list'),
    historySlides: () => document.querySelectorAll('.history-slider'),

    // players section
    allPlayersSections: () => document.querySelectorAll('.player-section'),
    playerSection: () => document.getElementById('players'),
    playersSection: {
        goalkeeper: () => document.querySelector('.player-section__keeper'),
        defender: () => document.querySelector('.player-section__def'),
        midfielder: () => document.querySelector('.player-section__mid'),
        forward: () => document.querySelector('.player-section__scorer'),
    },
    showMoreButtons: () => document.querySelectorAll('.show-more'),
    showLessButtons: () => document.querySelectorAll('.show-less'),
};