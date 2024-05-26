let count = 0;
const element = document.querySelector('#counter');

const increase = () => {
    count += 1;
    element.innerText = count;
}

const decrease = () => {
    count -= 1;
    element.innerText = count;
}

const reset = () => {
    count = 0;
    element.innerText = count;
}

const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', increase);

const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', decrease);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

const selectTheme = (theme) => {
    const body = document.querySelector('body');
    body.className = theme;

    const main = document.querySelector('main');
    main.className = theme;

    const buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        button.className = theme;
    }
}

/* const facebook = document.querySelector('#facebook');
facebook.addEventListener('click', () => selectTheme('facebook'));

const devMountain = document.querySelector('#devmountain');
devMountain.addEventListener('click', () => selectTheme('devmountain'));

const twitter = document.querySelector('#twitter');
twitter.addEventListener('click', () => selectTheme('twitter'));

const defaultTheme = document.querySelector('#default');
defaultTheme.addEventListener('click', () => selectTheme('default')); */

const themeButtons = document.querySelectorAll('header button');

for (const button of themeButtons) {
    button.addEventListener('click', () => selectTheme(`${button.id}`));
};