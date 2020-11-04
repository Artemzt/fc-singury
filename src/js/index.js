import '../sass/main.scss';
import * as footer from './views/footerView';
import * as mainTopView from './views/mainTopView';
import {insertDevicesClassToBody} from './utils/uaParser';
import * as burgerController from './controllers/burgerController';
import * as playerController from './controllers/playersController';
import * as historyController from './controllers/historyController';

window.onload = async () => {
    insertDevicesClassToBody();

    // render main top view
    mainTopView.renderTopMainView();

    // render burger and setup needed css classes
    burgerController.controlBurger();

    // render history and players section on ui
    await playerController.controlPlayers();
    await historyController.controlHistory();
    historyController.switchItem();

    // render footer
    footer.renderFooter();
};



