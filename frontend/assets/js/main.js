import { stopRelay, startRelay, toggleRelay, timerRelay, startTime } from './config/_variables.js';

import { Relay } from './components/_relay.js';

import { Timer } from './components/_timer.js';

import { Time } from './components/_time.js';

let time = new Time();

let startedTimerList = [];

for (let i = 0; i < startRelay.length; i++) {

    let relay = new Relay(),
        time = new Time(),
        startTimer = new Timer();

    let isStartCountdown = false;

    startedTimerList.push(startTimer);

    startRelay[i].addEventListener('click', function (e) {

        e.preventDefault();

        if (startRelay[i].dataset.state === 'start' || startRelay[i].dataset.state === 'resume') {
            startRelay[i].textContent = 'Pause';
            startRelay[i].dataset.state = 'pause';
        } else if (startRelay[i].dataset.state === 'pause') {
            startRelay[i].textContent = 'Resume';
            startRelay[i].dataset.state = 'resume';
        }
        else {
            startRelay[i].textContent = 'Start';
            startRelay[i].dataset.state = 'start';
        }

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

    });
}

for (let i = 0; i < stopRelay.length; i++) {
    let relay = new Relay(),
        stopTimer = new Timer();
    stopRelay[i].addEventListener('click', function (e) {
        e.preventDefault();
        // console.log(relay.toggleRelay(i));
        startRelay[i].textContent = 'Start';
        startRelay[i].dataset.state = 'start';
        timerRelay[i].innerHTML = startedTimerList[i].stop();
    });
}