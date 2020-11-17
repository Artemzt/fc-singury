import '../sass/main.scss';
import * as footer from './views/footerView';
import * as mainTopView from './views/mainTopView';
import * as fourOFourView from './views/fourOFourView';
import {insertDevicesClassToBody} from './utils/uaParser';
import * as burgerController from './controllers/burgerController';
import * as playerController from './controllers/playersController';
import * as historyController from './controllers/historyController';
import {route} from "./router";

window.onload = async () => {
    insertDevicesClassToBody();

    await route();
};
