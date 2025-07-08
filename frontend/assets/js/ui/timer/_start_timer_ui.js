import { startTimers, timers, startTimes, prices } from '../_dom_selectors.js';

import { setTextContent } from '../../utility/_button_utils.js';

import { Time } from '../../components/_time.js';

import { Timer } from '../../components/_timer.js';

import { Tariff } from '../../components/_tariff.js';

import { setTimer } from '../../store/_timer_store.js';

export function startTimer() {
    for (let i = 0; i < startTimers.length; i++) {

        let time = new Time(),
            timer = new Timer(),
            tariff = new Tariff(1);

        setTimer(i, timer);

        startTimers[i].addEventListener('click', function (e) {

            e.preventDefault();

            setTextContent(startTimers[i], function () {
                startTimes[i].innerHTML = time.timeNow();
            });


            // timer.countUp((updateDisplay) => {
            //     timers[i].innerHTML = updateDisplay;
            // });

            let timerObject = {
                hoursValue: 0,
                minutesValue: 43
            };

            timer.countDown(timerObject, (updateDisplay) => {
                if (timer.totalSeconds === 0) {
                    startTimers[i].textContent = 'Start';
                    startTimers[i].dataset.state = 'start';
                }
                timers[i].innerHTML = updateDisplay;
            });

            let totalSeconds = timer.totalSeconds;

            prices[i].innerHTML = tariff.calculatePrice(totalSeconds);

        });
    }
}