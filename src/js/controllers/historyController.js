import * as historyView from "./../views/historyView";
import History from "./../models/History";
import * as errorView from "../views/errorView";
import {elements, getElement} from "../views/elements";
import * as spinnerView from "../views/spinnerView";

const historyModel = new History();

export const controlHistory = async () => {

    // 1) render history section skeleton
    historyView.renderHistorySectionSkeleton();

    const historySection = getElement.historySection();

    // 2) render spinner
    spinnerView.renderSpinner(historySection);

    try {
        // 3) get history data from api
        const history = await historyModel.getAllHistory();

        // 4) render each history item on UI with history nav section
        for (let story of history) {
            historyView.renderHistoryItem(story);

        }
        // 5) render history years button
        for (let story of history) {
            historyView.renderHistoryControls(story);
        }
    }catch (e) {
        // Show error if server does not respond
        errorView.showLocalError('Ваш запит не було оброблено сервером. Будь-ласка спробуйте ще раз пізніше!', elements.historySection);
    }

    // 6) clear spinner if loaded
    spinnerView.clearSpinner(historySection);
};

// 7) switch item on click
export const switchItem = () => {
    historyView.showHistoryItem();
};