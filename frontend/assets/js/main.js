import { stopRelay, startRelay, toggleRelay, timerRelay, startTime } from './config/_variables.js';

import { Relay } from './components/_relay.js';

import { Timer } from './components/_timer.js';

for (let i = 0; i < startRelay.length; i++) {

    let relay = new Relay(),
        startTimer = new Timer();

    startRelay[i].addEventListener('click', function (e) {

        e.preventDefault();

        // startTimer.countUp((updateDisplay) => {
        //     timerRelay[i].innerHTML = updateDisplay;
        // });

        let now = new Date();

        let hours = now.getHours(),
            minutes = now.getMinutes();

        let timerObject = {
            hoursValue: 0,
            minutesValue: 0.1
        };

        startTimer.countDown(timerObject, (updateDisplay) => {
            timerRelay[i].innerHTML = updateDisplay;
            startTime[i].innerHTML = `${startTimer.timeNow()}`;
        });

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