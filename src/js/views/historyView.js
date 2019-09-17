import {elements, elementStrings} from './elements';

let historySlider = document.querySelectorAll(`.${elementStrings.historySlider}`);

export const renderHistoryItem = (history) => {
    const markup = `
    <div class="history__slider history-slider label__container" id="2018">
                <div class="label">
                        <label class="label__text">2018</label>
                </div>
            <ul class="history-block">
                <li class="history-item">
                        <h4 class="history-item__heading history-item__heading--bottom-right">
                                <span class="history-item__heading-span history-item__heading-span--blue">Позиція<br>у першості</span>
                        </h4>
                        <img src="./resources/img/kit-back.png" alt="Table position" class="history-item__img">
                    <div class="history-item__table-position">13</div>
                    
                </li>
                <li class="history-item history-item__custom--left">
                        <h4 class="history-item__heading history-item__heading--top-left">
                                <span class="history-item__heading-span history-item__heading-span--yellow">Кубок<br>Троянова</span>
                        </h4>
                    <img src="./resources/img/history/cup.png" alt="Troyanov Cup" class="history-item__img history-item__img--left">
                </li>

                <li class="history-item history-item__custom--right">
                        <h4 class="history-item__heading  history-item__heading--top history-item__heading--top-right">
                                <span class="history-item__heading-span history-item__heading-span--yellow">Кубок Дня<br> Конституції</span>
                        </h4>
                    <img src="./resources/img/history/cup.png" alt="Constitution Cup" class="history-item__img history-item__img--right">
                </li>
                <li class="history-item">
                        <h4 class="history-item__heading history-item__heading--bottom history-item__heading--top-left">
                                <span class="history-item__heading-span history-item__heading-span--blue">Кращий<br>гравець</span>
                        </h4>
                    <div class="history-item__heading--bottom-center">
                        <h5>Максим Іванов</h5>
                    </div>
                    <img src="./resources/img/history/best-player--2018.png" alt="MVP" class="history-item__img history-item__img--right">
                </li>
            </ul>
        </div>
    `;

    elements.recipe.insertAdjacentHTML('beforeend', markup);
};

export const displayFirstItem = () => {
    for(let i = 0; i < historySlider.length; i++) {
        if(i === 0) {
            historySlider[i].classList.add('active');
        }
        historySlider[i].classList.add('inactive');
    }
};

export const showHistoryItem = () => {
    let animatedButton = document.querySelectorAll(`.${elementStrings.animatedButton}`);
    let historySlider = document.querySelectorAll(`.${elementStrings.historySlider}`);
    for (let i = 0; i < animatedButton.length; i++) {

        animatedButton[i].addEventListener('click', function (e) {

            for (let j = 0; j < historySlider.length; j++) {

                if (historySlider[j].className.includes('active')) {
                    historySlider[j].classList.remove('active');
                    historySlider[j].classList.add('inactive');
                }

            }

            historySlider[i].classList.remove('inactive');
            historySlider[i].classList.add('active');

        })

    }
}


