import '../sass/main.scss';
import * as playerController from './controllers/playersController';
import * as historyController from './controllers/historyController';
import {elements, elementStrings} from "./views/elements";

window.onload = async () => {
    // render history and players section on ui
    await playerController.controlPlayers();
    await historyController.controlHistory();
    historyController.switchItem();
};



