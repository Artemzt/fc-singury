import {elements, elementStrings, getElement} from './elements';

export const toggleBurgerMenu = () => {
    const burgerButton = getElement.burgerButton();
    burgerButton.addEventListener('click', () => {
        setupMenu();
    });
};

export const navigateUserFromBurgerMenu = () =>  {
    const burgerMenu = getElement.burgerMenu();
    burgerMenu.addEventListener('click', () => {
        if (event.target.nodeName === 'A') {
            setupMenu();
        }
    });
};

const setupMenu = () => {
    const burgerButton = getElement.burgerButton();
    const burgerMenu = getElement.burgerMenu();
    burgerMenu.classList.toggle(elementStrings.inactive);
    elements.html.classList.toggle(elementStrings.preventScroll);
    burgerButton.classList.toggle(elementStrings.burgerActive);
};

export const renderBurgerItems = (item) => {
    const burgerMenu = getElement.burgerMenu();
    const markup = `
    <div class="burger-menu__item">
        <a data-hover="${item.name}" href="${item.url}">${item.name}</a>
    </div>
    `;

    burgerMenu.insertAdjacentHTML('beforeend', markup);
};
