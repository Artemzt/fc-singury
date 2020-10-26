import {elements, elementStrings} from './elements';

export const toggleBurgerMenu = () => elements.burgerButton.addEventListener('click', () => {
    setupMenu();
});

export const navigateUserFromBurgerMenu = () => elements.burgerMenu.addEventListener('click', () => {
    if (event.target.nodeName === 'A') {
        setupMenu();
    }
});

const setupMenu = () => {
    elements.burgerMenu.classList.toggle(elementStrings.inactive);
    elements.html.classList.toggle(elementStrings.preventScroll);
    elements.burgerButton.classList.toggle(elementStrings.burgerActive);
};

