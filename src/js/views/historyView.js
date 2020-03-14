import {elements, elementStrings} from './elements';

export const renderHistoryItem = (history) => {
    const markup = `
    <div class="history__slider history-slider label__container ${history.year === 2018 ? 'active' : 'inactive'}" id="${history.year}">
                <div class="label">
                        <label class="label__text">${history.year}</label>
                </div>
            <ul class="history-block">
                <li class="history-item">
                        <h4 class="history-item__heading history-item__heading--bottom-right">
                                <span class="history-item__heading-span history-item__heading-span--blue">Позиція<br>у першості</span>
                        </h4>
                        <img src="./resources/img/history/kit-back.png" alt="Table position" class="history-item__img">
                    <div class="history-item__table-position">${history.position}</div>
                    
                </li>
                <li class="history-item history-item__custom--left">
                        <h4 class="history-item__heading history-item__heading--top-left">
                                <span class="history-item__heading-span history-item__heading-span--yellow">${history.cup.name[0] ? history.cup.name[0] : history.event.name[0]}</span>
                        </h4>
                        <div class="history-item__heading--center">
                            <h5>${!history.event.description[0] ? '' : history.event.description[0]}</h5>
                        </div>
                    <img src="./resources/img/history/cups/${history.event.img[0] ? history.event.img[0] : history.cup.img[0]}" class="history-item__img history-item__img--left ${history.event.img[0] ? 'hide__block' : ''}">
                </li>
                <li class="history-item history-item__custom--right">
                        <h4 class="history-item__heading  history-item__heading--top history-item__heading--top-right">
                                <span class="history-item__heading-span history-item__heading-span--yellow">${history.cup.name[1] ? history.cup.name[1] : history.event.name[1]}</span>
                        </h4>
                        <div class="history-item__heading--center">
                            <h5>${!history.event.description[1] ? '' : history.event.description[1]}</h5>
                        </div>
                    <img src="./resources/img/history/cups/${history.event.img[1] ? history.event.img[1] : history.cup.img[1]}" class="history-item__img history-item__img--right ${history.event.img[1] ? 'hide__block' : ''}">
                </li>
                <li class="history-item">
                        <h4 class="history-item__heading history-item__heading--bottom history-item__heading--top-left">
                                <span class="history-item__heading-span history-item__heading-span--blue">Кращий<br>гравець</span>
                        </h4>
                    <div class="history-item__heading--bottom-center">
                        <h5>${history.mvp}</h5>
                    </div>
                    <img src="./resources/img/history/mvp/${history.mvpPhoto}" alt="MVP" class="history-item__img history-item__img--right">
                </li>
            </ul>
        </div>
    `;

    elements.historySection.insertAdjacentHTML('afterbegin', markup);
};

export const renderHistoryControls = (history) => {
    const markup = `
    <li class="years-block-conteiner--year year__photo--2017">
        <a href="#${history.year}" class="year-link years-block__button">
            // <div class="history-button__text">${history.year}</div>
         </a>
    </li>
`;
    elements.historyYearsBlock.insertAdjacentHTML('afterbegin', markup);
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
};


