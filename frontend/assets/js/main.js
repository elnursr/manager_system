import { stopRelay, startRelay, toggleRelay, timerRelay, startTime } from './config/_variables.js';

import { Relay } from './components/_relay.js';

import { Timer } from './components/_timer.js';

import { Time } from './components/_time.js';

let time = new Time();

for (let i = 0; i < startRelay.length; i++) {

    let relay = new Relay(),
        time = new Time(),
        startTimer = new Timer();

    let isStartCountdown = false;

    startRelay[i].addEventListener('click', function (e) {

        e.preventDefault();

        startTimer.countUp((updateDisplay) => {
            timerRelay[i].innerHTML = updateDisplay;
        });


        if (!isStartCountdown) {
            isStartCountdown = true;
            startTime[i].innerHTML = `${time.timeNow()}`;
        }

        // let timerObject = {
        //     hoursValue: 0,
        //     minutesValue: 0.1
        // };

        // startTimer.countDown(timerObject, (updateDisplay) => {
        //     timerRelay[i].innerHTML = updateDisplay;
        // });

        // if (toggleRelay[i].textContent === 'Turned Off') {
        //     toggleRelay[i].textContent = 'Turned On'
        //     toggleRelay[i].style.backgroundImage = 'linear-gradient(135deg, rgb(35, 37, 49), rgb(21, 56, 49), rgb(31, 175, 129)';
        // } else {
        //     toggleRelay[i].textContent = 'Turned Off'
        //     toggleRelay[i].style.backgroundImage = 'linear-gradient(-135deg, rgb(35, 37, 49), rgb(58, 16, 17), rgb(211, 83, 93))';
        // }
    });
}

for (let i = 0; i < stopRelay.length; i++) {
    stopRelay[i].addEventListener('click', function (e) {
        e.preventDefault();
    });
}