export function Timer() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.totalSeconds = 0;
    this.twoDigitFormat = 0;
    this.interval = 0;
    this.isStart = false;
};

Timer.prototype.calculateHours = function (totalSeconds) {
    this.hours = Math.trunc(totalSeconds / 3600);
    return this.hours;
};

Timer.prototype.calculateMinutes = function (totalSeconds) {
    this.minutes = Math.trunc((totalSeconds % 3600) / 60);
    return this.minutes;
};

Timer.prototype.calculateSeconds = function (totalSeconds) {
    this.seconds = Math.trunc(totalSeconds % 60);
    return this.seconds;
};

Timer.prototype.calculateTotalSeconds = function () {
    if (arguments.length === 1) {
        this.totalSeconds = arguments[0] * 3600;
        return this.totalSeconds;
    }
    else if (arguments.length === 2) {
        this.totalSeconds = (arguments[0] * 3600) + (arguments[1] * 60);
        return this.totalSeconds;
    }
};

Timer.prototype.setTwoDigitFormat = function (time) {
    this.twoDigitFormat = `${time < 10 ? '0' + time : time}`;
    return this.twoDigitFormat;
};

Timer.prototype.updateTimeForward = function () {
    setInterval(function () {
        this.seconds = this.calculateSeconds(this.totalSeconds);
        this.minutes = this.calculateMinutes(this.totalSeconds);
        this.hours = this.calculateHours(this.totalSeconds);
        this.totalSeconds++;

        return `${this.setTwoDigitFormat(this.hours)}:${this.setTwoDigitFormat(this.minutes)}:${this.setTwoDigitFormat(this.seconds)}`;

    }.bind(this), 1000);
};

Timer.prototype.updateTimeBackward = function ({ hoursValue, minutesValue }, device) {

    this.totalSeconds = this.calculateTotalSeconds(hoursValue, minutesValue);

    this.interval = setInterval(() => {

        let timerObject = {
            totalSeconds: this.totalSeconds,
            timeInterval: this.interval
        }

        this.clearInterval(timerObject);

        this.hours = this.calculateHours(this.totalSeconds);
        this.minutes = this.calculateMinutes(this.totalSeconds);
        this.seconds = this.calculateSeconds(this.totalSeconds);
        this.totalSeconds--;
        device.innerHTML = `${this.setTwoDigitFormat(this.hours)}:${this.setTwoDigitFormat(this.minutes)}:${this.setTwoDigitFormat(this.seconds)}`;

    }, 1000);
};

Timer.prototype.clearInterval = function ({ totalSeconds, timeInterval }) {
    if (totalSeconds <= 0) {
        clearInterval(timeInterval);
        // return;
    }
};

Timer.prototype.checkStart = function () {
    if (this.isStart) {
        return false;
    }
    else {
        this.isStart = true;
        return this.isStart;
    }
};