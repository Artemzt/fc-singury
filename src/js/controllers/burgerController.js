import BurgerMenu from "./../models/BurgerMenu";
import * as burgerView from './../views/burgerView';

const burgerModel = new BurgerMenu();

export const controlBurger = () => {

    // 0) toggle burger on click
    burgerView.toggleBurgerMenu();

    // 1) get burger items
    const items = burgerModel.getBurgerItems();

    // 2)render burger items
    for (const item of items) {
        burgerView.renderBurgerItems(item);
    }

    // 3) navigate user from burger menu
    burgerView.navigateUserFromBurgerMenu();
};

