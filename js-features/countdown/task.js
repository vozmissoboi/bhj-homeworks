"use strict";

// Таймер обратного отсчёта

const timer = document.getElementById('timer');
let countdown = +timer.innerText;
const timerInterval = setInterval(() => {
    countdown--;
    if (countdown >= 0) {
        timer.innerText = countdown;
    } else {
        clearInterval(timerInterval);
        alert("Вы победили в конкурсе!");
    }
}, 1000);