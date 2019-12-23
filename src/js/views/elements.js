export const elements = {
    html: document.querySelector('html'),
    showMoreButton: document.querySelectorAll('.show-more'),
    showLessButton: document.querySelectorAll('.show-less'),
    playersSection: document.getElementById('players'),
    allPlayersSections: document.querySelectorAll('.player-section'),
    playerSectionHeader: document.querySelector('.section-players__heading'),
    playerSection: {
        goalkeeper: document.querySelector('.player-section__keeper'),
        defender: document.querySelector('.player-section__def'),
        midfielder: document.querySelector('.player-section__mid'),
        forward: document.querySelector('.player-section__scorer'),
    },
    historySection:document.querySelector(".section-history"),
    historyYearsBlock: document.getElementById("years-list")
};

export const elementStrings = {
    spinner: 'spinner',
    historySlider: 'history-slider',
    animatedButton: 'year-link',
};