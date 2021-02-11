"use strict";

// Задача 1. Всплывающие окна

const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const btnElement = document.getElementsByClassName('show-success')[0];
btnElement.onclick = () => {
    const modalSuccess = document.getElementById('modal_success');
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

const closeBtnList = document.getElementsByClassName('modal__close_times');

Array.from(closeBtnList).forEach(closeBtn => {
    closeBtn.onclick = () => {
        const active = closeBtn.closest('.modal_active');
        active.classList.remove('modal_active');
    }
})