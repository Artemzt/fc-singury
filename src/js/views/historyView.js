import {elements, getElement} from './elements';
import MobileDetect from 'mobile-detect';
import {replaceImageToWEBP} from "../utils";

export const renderHistorySectionSkeleton = () => {
    const markup = `
    <section class="section-history" id="history">
    <div class="years-block">
        <ul class="years-block-conteiner" id="years-list">
        </ul>
    </div>
</section>`;

    elements.body.insertAdjacentHTML('beforeend', markup);
};

export const renderHistoryItem = (history) => {
    const historySection = getElement.historySection();
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
                        <picture>
                            <source type="image/webp" srcset="./resources/img/history/kit-back.webp">
                            <img type="image/png" src="./resources/img/history/kit-back.png" alt="Table position" class="history-item__img">
                        </picture>
                    <div class="history-item__table-position">${history.position}</div>
                    
                </li>
                <li class="history-item history-item__custom--left">
                        <h4 class="history-item__heading history-item__heading--top-left">
                                <span class="history-item__heading-span history-item__heading-span--yellow">${history.cup.name[0] ? history.cup.name[0] : history.event.name[0]}</span>
                        </h4>
                        <div class="history-item__heading--center">
                            <h5>${!history.event.description[0] ? '' : history.event.description[0]}</h5>
                        </div>
                    <picture>
                        <source type="image/webp" srcset="./resources/img/history/cups/${history.event.img[0] ? replaceImageToWEBP(history.event.img[0]) : replaceImageToWEBP(history.cup.img[0])}">
                        <img type="image/png" src="./resources/img/history/cups/${history.event.img[0] ? history.event.img[0] : history.cup.img[0]}" class="history-item__img history-item__img--right ${history.event.img[0] ? 'hide__block' : ''}">
                    </picture>
                </li>
                <li class="history-item history-item__custom--right">
                        <h4 class="history-item__heading  history-item__heading--top history-item__heading--top-right">
                                <span class="history-item__heading-span history-item__heading-span--yellow">${history.cup.name[1] ? history.cup.name[1] : history.event.name[1]}</span>
                        </h4>
                        <div class="history-item__heading--center">
                            <h5>${!history.event.description[1] ? '' : history.event.description[1]}</h5>
                        </div>
                    <picture>
                        <source type="image/webp" srcset="./resources/img/history/cups/${history.event.img[1] ? replaceImageToWEBP(history.event.img[1]) : replaceImageToWEBP(history.cup.img[1])}">
                        <img type="image/png" src="./resources/img/history/cups/${history.event.img[1] ? history.event.img[1] : history.cup.img[1]}" class="history-item__img history-item__img--right ${history.event.img[1] ? 'hide__block' : ''}">
                    </picture>
                </li>
                <li class="history-item">
                        <h4 class="history-item__heading history-item__heading--bottom history-item__heading--top-left">
                                <span class="history-item__heading-span history-item__heading-span--blue">Кращий<br>гравець</span>
                        </h4>
                    <div class="history-item__heading--bottom-center">
                        <h5>${history.mvp}</h5>
                    </div>
                    <picture>
                        <source type="image/webp" srcset="./resources/img/history/mvp/${replaceImageToWEBP(history.mvpPhoto)}">
                        <img type="image/png" src="./resources/img/history/mvp/${history.mvpPhoto}" alt="MVP" class="history-item__img history-item__img--right">
                    </picture>
                    
                </li>
            </ul>
        </div>
    `;

    historySection.insertAdjacentHTML('afterbegin', markup);
};

export const renderHistoryControls = (history) => {
    const historyYearsBlock = getElement.historyYearsBlock();
    const deviceDetect = new MobileDetect(window.navigator.userAgent);
    let markup;
    if (deviceDetect.is('iPhone')) {
        markup = `
        <li class="years-block-conteiner--year-new">
            <a href="#${history.year}" class="share_btn shtw fn-year-link">
                <span class="fa fa-twitter">${history.year}</span>
            </a>
        </li>
`;
    } else {
        markup = `
        <li class="years-block-conteiner--year year__photo--2017">
            <a href="#${history.year}" class="year-link fn-year-link years-block__button">
                <p class="history-button__text">${history.year}</p>
             </a>
        </li>
`;
    }

    historyYearsBlock.insertAdjacentHTML('afterbegin', markup);
};

export const showHistoryItem = () => {
    let animatedButton = getElement.animatedButtons();
    let historySlider = getElement.historySlides();
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
