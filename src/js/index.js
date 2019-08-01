import '../sass/main.scss'

var showMoreButton = document.querySelectorAll('.show-more');
var showLessButton = document.querySelectorAll('.show-less');

for(let i = 0; i < showMoreButton.length; i++) {
    showMoreButton[i].addEventListener('click', function(e) {
        console.log(e.target);
        e.target.parentElement.parentElement.nextElementSibling.style.display = 'block';
        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'inline';

    }, false);
};

for(let i = 0; i < showLessButton.length; i++) {
    showLessButton[i].addEventListener('click', function(e) {
        console.log(e.target);
        e.target.parentElement.parentElement.nextElementSibling.style.display = 'none';
        e.target.style.display = 'none';
        e.target.previousElementSibling.style.display = 'inline';


    }, false);
};



let historySlider = $('.history-slider');
let animatedButton = $('.year-link');

for (let i = 0; i < animatedButton.length; i++) {
    animatedButton[i].addEventListener('click', function (e) {
        for (let j = 0; j < historySlider.length; j++) {
            if (historySlider[j].className.includes('history__slider-active')) {
                historySlider.eq(j).removeClass('history__slider-active');
                historySlider.eq(j).addClass('history__slider-inactive');
            }
        }
        historySlider.eq(i).removeClass('history__slider-inactive');
        historySlider.eq(i).addClass('history__slider-active');
    })
}