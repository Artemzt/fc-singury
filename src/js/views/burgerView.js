import {elements, elementStrings} from './elements';

export const toggleBurgerMenu = () => {
    const burgerButton = document.querySelector(`.${elementStrings.burgerButton}`);
    burgerButton.addEventListener('click', () => {
        setupMenu();
    });
};

export const navigateUserFromBurgerMenu = () =>  {
    const burgerMenu = document.querySelector(`.${elementStrings.burgerMenu}`);
    burgerMenu.addEventListener('click', () => {
        if (event.target.nodeName === 'A') {
            setupMenu();
        }
    });
}

const setupMenu = () => {
    const burgerButton = document.querySelector(`.${elementStrings.burgerButton}`);
    const burgerMenu = document.querySelector(`.${elementStrings.burgerMenu}`);
    burgerMenu.classList.toggle(elementStrings.inactive);
    elements.html.classList.toggle(elementStrings.preventScroll);
    burgerButton.classList.toggle(elementStrings.burgerActive);
};

export const renderBurgerItems = (item) => {
    const burgerMenu = document.querySelector(`.${elementStrings.burgerMenu}`);
    const markup = `
    <div class="burger-menu__item">
        <a data-hover="${item.name}" href="${item.url}">${item.name}</a>
    </div>
    `;

    burgerMenu.insertAdjacentHTML('beforeend', markup);
};
