import { Timer } from './_timer.js';

let timer = new Timer();

export function Time() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.date = 0;
    this.isStared = false;
}

Time.prototype.timeNow = function () {
    if (!this.isStared) {
        this.isStared = !this.isStared;
        return this.formatTime();
    }
    else {
        this.isStared = !this.isStared;
        return this.formatTime();
    }
}

Time.prototype.formatTime = function () {
    this.date = new Date();

    let hours = this.date.getHours(),
        minutes = this.date.getMinutes(),
        seconds = this.date.getSeconds(),
        formattedHours = timer.setTwoDigitFormat(hours),
        formattedMinutes = timer.setTwoDigitFormat(minutes),
        formattedSeconds = timer.setTwoDigitFormat(seconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}