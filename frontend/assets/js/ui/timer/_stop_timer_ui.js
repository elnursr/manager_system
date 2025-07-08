import { Time } from '../../components/_time.js';

import { Tariff } from '../../components/_tariff.js';

import { getTimer } from '../../store/_timer_store.js';

import { startTimers, stopTimers, endTimes, timers, prices } from '../_dom_selectors.js';

export function stopTimer() {
    for (let i = 0; i < stopTimers.length; i++) {

        let time = new Time(),
            timer = getTimer(i);

        stopTimers[i].addEventListener('click', function (e) {
            e.preventDefault();


            startTimers[i].textContent = 'Start';
            startTimers[i].dataset.state = 'start';
            endTimes[i].innerHTML = `${time.timeNow()}`;

            let totalSeconds = timer.totalSeconds,
                tariff = new Tariff(2);

            // prices[i].innerHTML = tariff.calculatePrice(totalSeconds);

            timers[i].innerHTML = timer.stop();

        });
    }
}