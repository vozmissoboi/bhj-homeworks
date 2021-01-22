"use strict";

// Игра-кликер

const cookie = document.getElementById('cookie');

const cookieClicker = document.getElementById('clicker__counter');
let initValue = +cookieClicker.innerText;

cookie.onmousedown = () => {
    cookie.width = 220;
    initValue++;
    cookieClicker.innerText = initValue;
}

cookie.onmouseup = () => {
    cookie.width = 200;
}