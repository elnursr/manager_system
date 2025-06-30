import { Timer } from './_timer.js';

let timer = new Timer();

export function Time() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.isStared = false;
}

Time.prototype.timeNow = function () {
    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    return `${timer.setTwoDigitFormat(hours)}:${timer.setTwoDigitFormat(minutes)}:${timer.setTwoDigitFormat(seconds)}`;
}