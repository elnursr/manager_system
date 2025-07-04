import { startTimers, timers, startTimes, prices } from '../_dom_selectors.js';

import { setTextContent } from '../../utility/_button_utils.js';

import { Time } from '../../components/_time.js';

import { Timer } from '../../components/_timer.js';

import { Tariff } from '../../components/_tariff.js';

export let startedTimerList = [];

export function startTimer() {
    for (let i = 0; i < startTimers.length; i++) {

        let time = new Time(),
            timer = new Timer(),
            tariff = new Tariff(2);

        startedTimerList.push(timer);

        startTimers[i].addEventListener('click', function (e) {

            e.preventDefault();

            setTextContent(startTimers[i], function () {
                startTimes[i].innerHTML = time.timeNow();
            });

            // timer.countUp((updateDisplay) => {
            //     timers[i].innerHTML = updateDisplay;
            //     // console.log(timer.totalSeconds);                
            // });

            // prices[i].innerHTML = tariff.calculatePrice(timer.totalSeconds);

            let timerObject = {
                hoursValue: 0,
                minutesValue: 75
            };

            timer.countDown(timerObject, (updateDisplay) => {
                if (timer.totalSeconds === 0) {
                    startTimers[i].textContent = 'Start';
                    startTimers[i].dataset.state = 'start';
                }
                timers[i].innerHTML = updateDisplay;
            });

            prices[i].innerHTML = tariff.calculatePrice(timer.totalSeconds);

        });
    }
}