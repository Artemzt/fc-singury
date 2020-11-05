import {elements, getElement} from './elements';
import {replaceImageToWEBP, compareDates} from '../utils/index';

const positionMatcher = (position) => {
    switch (position) {
        case "Воротар":
            return position = 'goalkeeper';
        case "Півзахисник":
            return position = 'midfielder';
        case "Захисник":
            return position = 'defender';
        case "Нападник":
            return position = 'forward';
        default:
            return position = 'midfielder';
    }
};

export const renderPlayerSectionSkeleton = () => {
    const markup = `
    <section class="section-players" id="players">
    <div class="row">
        <h2 class="section-players__heading">Гравці Команди</h2>
    </div>
    <div class="row">
        <div>
            <h3>Воротарі <a class="show-more highlight-container"><span class="highlight">показати</span></a><a
                    class=" show-less highlight-container"><span class="highlight">приховати</span></a></h3>
        </div>
        <ul class="player-section player-section__keeper">
        </ul>
        <div>
            <h3>Захисники<a class="show-more highlight-container"><span class="highlight">показати</span></a><a
                    class=" show-less highlight-container"><span class="highlight">приховати</span></a></h3>
        </div>
        <ul class="player-section player-section__def">
        </ul>
        <div>
            <h3>Півзахисники <a class="show-more highlight-container"><span class="highlight">показати</span></a><a
                    class=" show-less highlight-container"><span class="highlight">приховати</span></a></h3>
        </div>
        <ul class="player-section player-section__mid">
        </ul>
        <div>
            <h3>Нападники <a class="show-more highlight-container"><span class="highlight">показати</span></a><a
                    class=" show-less highlight-container"><span class="highlight">приховати</span></a></h3>
        </div>
        <ul class="player-section player-section__scorer">
        </ul>
    </div>
</section>
    `;

    elements.header.insertAdjacentHTML('afterend', markup);
};

export const showPlayerSection = () => {
    const showMoreButtons = getElement.showMoreButtons();
    const showLessButtons = getElement.showLessButtons();

    for (let i = 0; i < showMoreButtons.length; i++) {
        showMoreButtons[i].addEventListener('click', function (e) {
            e.currentTarget.parentElement.parentElement.nextElementSibling.style.display = 'block';
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling.style.display = 'inline';

        }, false);

        showLessButtons[i].addEventListener('click', function (e) {
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
                            ${compareDates(player.dateOfBirth) ? renderBirthday(player.age) : ''}
                            <picture>
                                <source type="image/webp" srcset="./resources/img/player-card/card-back/${player.imageBack !== '' ? replaceImageToWEBP(player.imageBack) : 'card-default-back.webp'}">
                                <img type="image/png" src="./resources/img/player-card/card-back/${player.imageBack !== '' ? player.imageBack : 'card-default-back.png'}" alt=${player.surname}>
                            </picture>
                            ${withStats ? renderStats(player) : ''}
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
                                <source type="image/webp" srcset="./resources/img/player-card/card-back/${player.imageBack !== '' ? replaceImageToWEBP(player.imageBack) : 'card-default-back.webp'}">
                                <img src="./resources/img/player-card/card-back/${player.imageBack !== '' ? player.imageBack : 'card-default-back.png'}" alt=${player.surname}>
                            </picture>
                        </figure>
                    </div>
        </li>
    `;

    const el = getElement.playersSection[positionMatcher(player.position)]();
    el.insertAdjacentHTML('afterbegin', markup);
};

const renderStats = (player) => {
    const markup = `
        <div class="player-section__card--feature">
            <span class="player-section__card--feature-goal player-section__card--feature-overall ${player.goalsPerSeason === 0 ? 'hide__block' : ''}">${player.goalsPerSeason}</span>
            <span class="player-section__card--feature-assist player-section__card--feature-overall ${player.assistsPerSeason === 0 ? 'hide__block' : ''}">${player.assistsPerSeason}</span>
            <span class="player-section__card--feature-yellow player-section__card--feature-overall ${player.yellowCardsPerSeason === 0 ? 'hide__block' : ''}">${player.yellowCardsPerSeason}</span>
            <span class="player-section__card--feature-red player-section__card--feature-overall ${player.redCardsPerSeason === 0 ? 'hide__block' : ''}">${player.redCardsPerSeason}</span>
        </div>                         
  `;

    return markup;
};

const renderBirthday = (age) => {
    const markup = `
    <div class="birthdate">
        <div class="" id="bubbleCanvas">
            <div class="bubbles"></div>
            <div class="bubbles"></div>
            <div class="bubbles"></div>
            <div class="bubbles"></div>
            <div class="bubbles"></div>
            <div class="bubbles"></div>
            <div class="bubbles"></div>
            <div class="bubbles"></div>
            <div class="bubbles"></div>
            <div class="bubbles"></div>
            <div class="bubbles"></div>
            <div class="bubbles"></div>
        </div>
        <div class="candle">
               <div id="flame" class="lit"></div>
        </div>
        <div class="cake">
            <div class="age">${age}</div>
</div>
    </div>
    `;

    return markup;
};
