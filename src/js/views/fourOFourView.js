import {elements} from "./elements";

export const renderFourOFourPage = () => {
    const markup = `
    <div class="four-o-four">
        <nav>
            <div class="row">
                <picture>
                    <source type="image/webp" srcset="./resources/img/logo.webp">
                    <img type="image/png" src="./resources/img/logo.png" alt="Team logo" class="logo">
                </picture>
            </div>
        </nav>
        <div class="row start-text-block__inverse">
            <h1>напевно, це не те, що ви шукали
                <br>або хотіли б побачити ;)</h1>
            <a class="history-item__heading-span--yellow" title="Повернутись на головну" href="/"><<<< повернутись на
                головну</a>
        </div>
    </div>
    `;

    elements.header.insertAdjacentHTML('beforeend', markup);
};