import '../sass/main.scss';
import * as playerController from './controllers/playersController';
import * as historyController from './controllers/historyController';
import {insertDevicesClassToBody} from './utils/uaParser';

window.onload = async () => {

    insertDevicesClassToBody();

    // render history and players section on ui
    await playerController.controlPlayers();
    await historyController.controlHistory();
    historyController.switchItem();
};



