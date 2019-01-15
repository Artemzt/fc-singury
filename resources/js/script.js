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