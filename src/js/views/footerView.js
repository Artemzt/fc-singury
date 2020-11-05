import {elements} from './elements';

export const renderFooter = () => {
    const markup = `
    <footer class="footer">
    <div class="footer-content">
        <p class="footer-content__author">Сайт розроблено <a
                href="https://www.facebook.com/profile.php?id=100002092753678" target="_blank">Соколовським Артемом</a>
            за допомоги <a href="https://www.facebook.com/profile.php?id=100017270197081" target="_blank">Янович
                Ірини</a>
            та <a href="https://www.facebook.com/Shybystyuk" target="_blank">Шибистюка Олександра</a> у 2019-му році.
            Фотограф
            <a href="https://www.facebook.com/profile.php?id=100018008170713" target="_blank">Катерина Сердега</a>.</p>
        <div class="footer-content__logo">
            <picture>
                <source type="image/webp" srcset="./resources/img/logo.webp">
                <img type="image/png" src="resources/img/logo.png" alt="team logo">
            </picture>
        </div>
        <p class="footer-content__description">Cайт-візитівка команди ФК "Сінгури". Створено в процесі вивчення HTML та
            CSS за матеріалами та ідеями курсу Jonas Schmedtmann: <a href="https://www.udemy.com/advanced-css-and-sass/"
                                                                     target="_blank">Advanced CSS and Sass: Flexbox,
                Grid, Animations and More!</a></p>
    </div>

</footer>`;

    elements.body.insertAdjacentHTML('beforeend', markup);
};