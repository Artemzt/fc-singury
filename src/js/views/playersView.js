import {elements, elementStrings} from './elements';

const positionMatcher = (position) => {
    switch (position) {
        case "Воротар":
            return position = 'goalkeeper';
        case "Півзахисник":
            return position = 'midfielder';
        case "Захисник":
            return position = "defender";
        case "Нападник":
            return position = "forward";
        default:
            return position = 'midfielder';
    }
};

export const showPlayerSection = () => {

    for (let i = 0; i < elements.showMoreButton.length; i++) {
        elements.showMoreButton[i].addEventListener('click', function (e) {
            e.currentTarget.parentElement.parentElement.nextElementSibling.style.display = 'block';
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling.style.display = 'inline';

        }, false);

        elements.showLessButton[i].addEventListener('click', function (e) {
            e.currentTarget.parentElement.parentElement.nextElementSibling.style.display = 'none';
            e.currentTarget.style.display = 'none';
            e.currentTarget.previousElementSibling.style.display = 'inline';


        }, false);
    }
};

export const renderPlayer = (player, withStats) => {
    const markup = `
        <li class="player-section__card">
                    <div class="player-face player-front">
                        <figure>
                            <picture>
                                <img src="./resources/img/player-card/card-back/${player.imageBack !== '' ? player.imageBack : 'card-default-back.png'}" alt=${player.surname}>
                            </picture>
                            ${withStats ? renderStats(player) : null}
                            <div class="player-front--textblock">
                                <span>${player.number}</span>
                                <span>${player.name}</span>
                                <span>${player.surname}</span>
                            </div>
                        </figure>
                    </div>
                    <div class="player-face player-back">
                        <figure>
                            <picture>
                                <img src="./resources/img/player-card/card-back/${player.imageBack !== '' ? player.imageBack : 'card-default-back.png'}" alt=${player.surname}>
                            </picture>
                        </figure>
                    </div>
        </li>
    `;

    elements.playerSection[positionMatcher(player.position)].insertAdjacentHTML('afterbegin', markup);
};

const renderStats = (player) => {
    const markup = `
        <div class="player-section__card--feature">
            <span class="player-section__card--feature-goal player-section__card--feature-overall ${player.goalsPerSeason === 1 ? 'hide__block' : ''}">${player.goalsPerSeason}</span>
            <span class="player-section__card--feature-assist player-section__card--feature-overall ${player.assistsPerSeason === 1 ? 'hide__block' : ''}">${player.assistsPerSeason}</span>
            <span class="player-section__card--feature-yellow player-section__card--feature-overall ${player.yellowCardsPerSeason === 1 ? 'hide__block' : ''}">${player.yellowCardsPerSeason}</span>
            <span class="player-section__card--feature-red player-section__card--feature-overall ${player.redCardsPerSeason === 1 ? 'hide__block' : ''}">${player.redCardsPerSeason}</span>
        </div>                         
  `;

    return markup;
};