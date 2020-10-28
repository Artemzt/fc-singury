import '../sass/main.scss';
import {insertDevicesClassToBody} from './utils/uaParser';
import * as burgerController from './controllers/burgerController';
import * as playerController from './controllers/playersController';
import * as historyController from './controllers/historyController';

window.onload = async () => {
    insertDevicesClassToBody();

    // render burger and setup needed css classes
    burgerController.controlBurger();

    // render history and players section on ui
    await playerController.controlPlayers();
    await historyController.controlHistory();
    historyController.switchItem();
};



