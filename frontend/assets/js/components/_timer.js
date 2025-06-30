export function Timer() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.totalSeconds = 0;
    this.twoDigitFormat = 0;
    this.interval = 0;
    this.isStarted = false;
    this.isPaused = false;
    this.isResumed = false;
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

Timer.prototype.countUp = function (callBack) {
    setInterval(function () {

        callBack(this.updateDisplay());
        this.totalSeconds++;

    }.bind(this), 1000);
};

Timer.prototype.countDown = function ({ hoursValue, minutesValue }, callBack) {

    if (!this.isStarted) {
        this.isStarted = !this.isStarted;

        this.totalSeconds = this.calculateTotalSeconds(hoursValue, minutesValue);

        this.interval = setInterval(() => {
            if (this.totalSeconds >= 0 && !this.isPaused) {
                callBack(this.updateDisplay());
                this.totalSeconds--;
            }
            else {
                let timerObject = {
                    totalSeconds: this.totalSeconds,
                    timeInterval: this.interval
                };
                this.clearInterval(timerObject);
            }
        }, 1000);
    }
    else {
        this.pause();
    }
};

Timer.prototype.updateDisplay = function () {
    this.hours = this.calculateHours(this.totalSeconds);
    this.minutes = this.calculateMinutes(this.totalSeconds);
    this.seconds = this.calculateSeconds(this.totalSeconds);
    return `${this.setTwoDigitFormat(this.hours)}:${this.setTwoDigitFormat(this.minutes)}:${this.setTwoDigitFormat(this.seconds)}`;
};

Timer.prototype.clearInterval = function ({ totalSeconds, timeInterval }) {
    if (totalSeconds <= 0) {
        clearInterval(timeInterval);
    }
};

Timer.prototype.checkStart = function () {
    if (this.isStarted) return;
};

Timer.prototype.pause = function () {
    this.isPaused = !this.isPaused;
};

Timer.prototype.resume = function () {
    this.isPaused = false;
};