import {elements, elementStrings} from './elements';

export const showPlayerSection = () => {

    for(let i = 0; i < elements.showMoreButton.length; i++) {
        elements.showMoreButton[i].addEventListener('click', function(e) {
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'block';
            e.target.style.display = 'none';
            e.target.nextElementSibling.style.display = 'inline';
    
        }, false);
    
        elements.showLessButton[i].addEventListener('click', function(e) {
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'none';
            e.target.style.display = 'none';
            e.target.previousElementSibling.style.display = 'inline';
    
    
        }, false);
    };
}


export const renderPlayer = (player) => {
    const markup = `
        <li class="player-section__card">
                    <div class="player-face player-front">
                        <figure>
                            <img src="./resources/img/players/Deadpool.jpg" alt="Півзахисник 1">
                            <div class="player-front--textblock">
                                <span>#3</span>
                                <span>Ігор</span>
                                <span>Ганжала</span>
                            </div>
                        </figure>
                    </div>
                    <div class="player-face player-back">
                        <figure>
                            <img src="./resources/img/player-card/card-back/ganzhala-back.png" alt="">
                        </figure>
                    </div>
        </li>
    `;

    elements.playerSection[player.position].insertAdjacentHTML('afterbegin', markup);
}