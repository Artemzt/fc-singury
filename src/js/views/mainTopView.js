import {elements, elementStrings} from './elements';

export const renderTopMainView = () => {
    const markup = `
    <nav>
        <div class="row">
            <div class="top-header__container">
                <picture>
                    <source type="image/webp" srcset="./resources/img/logo.webp">
                    <img type="image/png" src="./resources/img/logo.png" alt="Team logo" class="logo">
                </picture>
                <div class="burger-container">
                    <div class="burger-button">
                        <div class="burger__line burger__line--top"></div>
                        <div class="burger__line burger__line--middle"></div>
                        <div class="burger__line burger__line--bottom"></div>
                    </div>
                    <div class="burger-menu inactive">
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div class="row start-text-block">
        <h1>Команда Сінгурівської сільської ради.
            <br>Постійний учасник першості Житомирського району з футболу.</h1>
        <a class="btn btn-fb" title="Натисніть щоб перейти" target="blank"
           href="https://www.facebook.com/groups/243862829425226/?ref=group_header"><img
                src="./resources/img/facebook-Button.png" alt="Facebook"></a>
    </div>`

    elements.header.insertAdjacentHTML('beforeend', markup);
};