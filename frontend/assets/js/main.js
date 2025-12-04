// import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.26.3/+esm';

import {
    managerSystemTableStartButton, managerSystemTableBeginButton, managerSystemTableDisableButton,
    managerSystemTableStartTime, managerSystemTableEndTime,
    managerSystemTableDuration,
    modal, modalMenu, modalMenuClose,
    modalMenuStart, modalMenuBegin,
    modalMenuStartButton, modalMenuBeginButton,
    managerSystemTableTariff, managerSystemTableTotalPrice,
    managerSystemTableStatusFree
} from './ui/_dom_selectors.js';

import { Time } from './time/_time.js';

import { Timer } from './timer/_timer.js';

import { Tariff } from './tariff/_tariff.js';

let timer = new Timer();

let activeStartIndex = null;

// start begin disable buttons handling
for (let i = 0; i < managerSystemTableStartButton.length; i++) {

    // start handling start here
    managerSystemTableStartButton[i].addEventListener('click', function (e) {
        e.preventDefault();
        activeStartIndex = i;
        modal.classList.add('active');
        modalMenuStart.classList.add('active');
    });

    // begin handling start here
    managerSystemTableBeginButton[i].addEventListener('click', function (e) {
        e.preventDefault();
        activeStartIndex = i;
        modal.classList.add('active');
        modalMenuBegin.classList.add('active');
    });


    let timeDisabled = new Time({
        timer: timer
    });
    managerSystemTableDisableButton[i].addEventListener('click', function (e) {
        e.preventDefault();
        timerBegin.stop();
        managerSystemTableStartButton[i].disabled = false;
        managerSystemTableBeginButton[i].disabled = false;
        managerSystemTableStatusFree[i].classList.remove('manager-system__table-status--busy');
        managerSystemTableStatusFree[i].classList.add('manager-system__table-status--free');
        managerSystemTableEndTime[i].innerHTML = timeDisabled.timeNow();
    });
};

// start tariff handling
modalMenuStartButton.addEventListener('click', function (e) {
    e.preventDefault();

    let i = activeStartIndex;

    let timerStart = new Timer();

    let timeStart = new Time({
        timer: timerStart
    });

    let tariffStart = new Tariff();

    managerSystemTableStartButton[i].disabled = true;
    managerSystemTableBeginButton[i].disabled = true;

    managerSystemTableStatusFree[i].classList.remove('manager-system__table-status--free');
    managerSystemTableStatusFree[i].classList.add('manager-system__table-status--busy');

    let hours = document.querySelector('.modal-menu-start__hours').value,
        minutes = document.querySelector('.modal-menu-start__minutes').value,
        tariffValue = document.querySelector('.modal-menu-start__tariff').value;

    let timerObject = {
        hoursValue: hours,
        minutesValue: minutes
    };

    let totalTime = timerStart.calculateTotalSeconds(hours, minutes);

    timerStart.countDown(timerObject, (updateDisplay) => {
        managerSystemTableDuration[i].innerHTML = updateDisplay;
    });

    managerSystemTableStartTime[i].innerHTML = timeStart.timeNow();
    managerSystemTableEndTime[i].innerHTML = '00:00:00';

    managerSystemTableTariff[i].innerHTML = `$ ${tariffValue}/hr`;
    managerSystemTableTotalPrice[i].innerHTML = `$ ${tariffStart.calculatePrice(totalTime, tariffValue)}`;

    modal.classList.remove('active');
    modalMenuStart.classList.remove('active');
});

// begin tariff handling
modalMenuBeginButton.addEventListener('click', function (e) {
    e.preventDefault();

    let i = activeStartIndex;

    console.log(i);

    let timerBegin = new Timer();
    let timeBegin = new Time({
        timer: timerBegin
    });

    managerSystemTableStartButton[i].disabled = true;
    managerSystemTableBeginButton[i].disabled = true;
    0
    managerSystemTableStatusFree[i].classList.remove('manager-system__table-status--free');
    managerSystemTableStatusFree[i].classList.add('manager-system__table-status--busy');

    let tariffValue = document.querySelector('.modal-menu-begin__tariff').value;

    timerBegin.countUp((updateDisplay) => {
        managerSystemTableDuration[i].innerHTML = updateDisplay;
    });

    managerSystemTableStartTime[i].innerHTML = timeBegin.timeNow();
    managerSystemTableEndTime[i].innerHTML = '00:00:00';
    managerSystemTableTariff[i].innerHTML = `$ ${tariffValue}/hr`;
    modal.classList.remove('active');
    modalMenuBegin.classList.remove('active');
});

for (let i = 0; i < modalMenuClose.length; i++) {
    modalMenuClose[i].addEventListener('click', function (e) {
        e.preventDefault();
        modal.classList.remove('active');
        modalMenu[i].classList.remove('active');
    });
}