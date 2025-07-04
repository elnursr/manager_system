import { Time } from '../../components/_time.js';

import { startTimers, stopTimers, endTimes, timers } from '../_dom_selectors.js';

import { startedTimerList } from './_start_timer_ui.js';

export function stopTimer() {
    for (let i = 0; i < stopTimers.length; i++) {
        console.log(startedTimerList[i]);
        let time = new Time();
        stopTimers[i].addEventListener('click', function (e) {
            e.preventDefault();
            startTimers[i].textContent = 'Start';
            startTimers[i].dataset.state = 'start';
            endTimes[i].innerHTML = `${time.timeNow()}`;
            console.log(startedTimerList[i]);
            timers[i].innerHTML = startedTimerList[i].stop();
        });
    }
}