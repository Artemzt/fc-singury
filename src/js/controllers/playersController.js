import * as playersView from './../views/playersView';
import * as spinnerView from './../views/spinnerView';
import * as errorView from './../views/errorView';
import Player from './../models/Player';
import {getElement} from '../views/elements';

const player = new Player();

export const controlPlayers = async () => {
    // 1) render player section skeleton and
    playersView.renderPlayerSectionSkeleton();
    const allPlayersSections = getElement.allPlayersSections();
    const playerSection = getElement.playerSection();

    // 1) render players section template and show spinner
    playersView.showPlayerSection();
    for (let el of allPlayersSections) {
        spinnerView.renderSpinner(el);
    }

    // 2) get all players data from the api
    try {
        const allPlayers = await player.getAllPlayers();
        // 3) render each player on UI
        for (let player of allPlayers) {
            playersView.renderPlayer(player, true);
        }
    }catch (e) {
        // Show error if server does not respond
        errorView.showLocalError('Ваш запит не було оброблено сервером. Будь-ласка спробуйте ще раз пізніше!', playerSection);
    }

    for (let el of allPlayersSections) {
        spinnerView.clearSpinner(el);
    }
};




