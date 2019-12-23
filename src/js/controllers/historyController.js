import * as historyView from "./../views/historyView";
import History from "./../models/History";
import * as errorView from "../views/errorView";
import {elements} from "../views/elements";

const historyModel = new History();

export const controlHistory = async () => {

    try {
        // 1) get history data from api
        const history = await historyModel.getAllHistory();

        // 2) render each history item on UI with history nav section
        for (let story of history) {
            historyView.renderHistoryItem(story);

        }
        // 3) render history years button
        for (let story of history) {
            historyView.renderHistoryControls(story);
        }
    }catch (e) {
        // Show error if server does not respond
        errorView.showLocalError('Ваш запит не було оброблено сервером. Будь-ласка спробуйте ще раз пізніше!', elements.historySection);
    }


};

export const switchItem = () => {
    historyView.showHistoryItem();
};