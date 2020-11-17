import renderHomePage from "../pages/homePage";
import * as fourOFourView from '../views/fourOFourView';

export const route = async () => {
    switch (window.location.pathname) {
        case '/': {
            await renderHomePage();
            break;
        }
        default: fourOFourView.renderFourOFourPage();
    }
};
