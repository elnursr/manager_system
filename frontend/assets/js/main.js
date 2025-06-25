import { stopRelay, startRelay, toggleRelay, timerRelay } from './config/_variables.js';

import { Relay } from './components/_relay.js';

import { Timer } from './components/_timer.js';

let relay = new Relay();

for (let i = 0; i < startRelay.length; i++) {
    let startTimer = new Timer();

    startRelay[i].addEventListener('click', function (e) {

        e.preventDefault();

        // startTimer.countUp((updateDisplay) => {
        //     timerRelay[i].innerHTML = updateDisplay;
        // });

        let timerObject = {
            hoursValue: 0,
            minutesValue: 0.5
        };

        startTimer.countDown(timerObject,(updateDisplay) => {
            timerRelay[i].innerHTML = updateDisplay;
        });
    });
}

for (let i = 0; i < stopRelay.length; i++) {
    stopRelay[i].addEventListener('click', function (e) {
        e.preventDefault();
        timer.isPause = true;
    });
}

for (let i = 0; i < toggleRelay.length; i++) {
    toggleRelay[i].addEventListener('click', function (e) {
        e.preventDefault();
        if (toggleRelay[i].textContent === 'Turned Off') {
            toggleRelay[i].textContent = 'Turned On'
            toggleRelay[i].style.backgroundImage = 'linear-gradient(135deg, rgb(35, 37, 49), rgb(21, 56, 49), rgb(31, 175, 129)';
        } else {
            toggleRelay[i].textContent = 'Turned Off'
            toggleRelay[i].style.backgroundImage = 'linear-gradient(-135deg, rgb(35, 37, 49), rgb(58, 16, 17), rgb(211, 83, 93))';
        }
        console.log(relay.toggleRelay(i));
    });
}