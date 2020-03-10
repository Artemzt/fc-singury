import * as playersView from './../views/playersView';
import * as spinnerView from './../views/spinnerView';
import * as errorView from './../views/errorView';
import Player from './../models/Player';
import {elements, elementStrings} from '../views/elements';

const player = new Player();

export const controlPlayers = async () => {

    // 1) render players section template and show spinner
    playersView.showPlayerSection();
    for (let el of elements.allPlayersSections) {
        spinnerView.renderSpinner(el);
    }

    // 2) get all players data from the api
    try {
        const allPlayers = await player.getAllPlayers();
        // 3) render each player on UI
        for (let player of allPlayers) {
            playersView.renderPlayer(player, false);
        }
    }catch (e) {
        // Show error if server does not respond
        errorView.showLocalError('Ваш запит не було оброблено сервером. Будь-ласка спробуйте ще раз пізніше!', elements.playersSection);
    }

    for (let el of elements.allPlayersSections) {
        spinnerView.clearSpinner(el);
    }
};




