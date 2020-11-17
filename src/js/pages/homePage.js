import * as footer from "../views/footerView";
import * as mainTopView from "../views/mainTopView";
import * as burgerController from "../controllers/burgerController";
import * as playerController from "../controllers/playersController";
import * as historyController from "../controllers/historyController";

export default async function renderHomePage() {
    mainTopView.renderTopMainView();
    mainTopView.renderBurgerIntoTopMain();

// render burger and setup needed css classes
    burgerController.controlBurger();

// render history and players section on ui
    await playerController.controlPlayers();
    await historyController.controlHistory();
    historyController.switchItem();

// render footer
    footer.renderFooter();
}
