export function Timer({
    hours = 0,
    minutes = 0,
    seconds = 0,
    milliSeconds = 0,
    interval = 0,
    totalSeconds = 0,
    twoDigitFormat = 0,
    isPaused = false,
    isStarted = false
} = {}) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.interval = interval;
    this.totalSeconds = totalSeconds;
    this.twoDigitFormat = twoDigitFormat;
    this.isPaused = isPaused;
    this.isStarted = isStarted;
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
    this.seconds = totalSeconds % 60;
    return this.seconds;
};

Timer.prototype.calculateMilliSeconds = function (totalSeconds) {
    this.milliSeconds = totalSeconds % 100;
    return this.milliSeconds;
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
    if (!this.isStarted) {
        this.isStarted = !this.isStarted;
        this.interval = setInterval(function () {
            if (!this.isPaused) {
                callBack(this.updateDisplay());
                this.totalSeconds++;
            }
        }.bind(this), 1000);
    }
    else {
        this.pauseResume();
    }
};

Timer.prototype.countDown = function ({ hoursValue, minutesValue }, callBack) {
    if (!this.isStarted) {
        this.isStarted = true;

        this.totalSeconds = this.calculateTotalSeconds(hoursValue, minutesValue);

        this.interval = setInterval(() => {
            if (!this.isPaused) {
                if (this.totalSeconds >= 0) {
                    callBack(this.updateDisplay());
                    this.totalSeconds--;
                }
                else {
                    this.isStarted = false;
                    clearInterval(this.interval);
                }
            }
        }, 1000);
    }
    else {
        this.pauseResume();
    }
};

Timer.prototype.updateDisplay = function () {
    this.hours = this.calculateHours(this.totalSeconds);
    this.minutes = this.calculateMinutes(this.totalSeconds);
    this.seconds = this.calculateSeconds(this.totalSeconds);
    return `${this.setTwoDigitFormat(this.hours)}:${this.setTwoDigitFormat(this.minutes)}:${this.setTwoDigitFormat(this.seconds)}`;
};

Timer.prototype.checkStart = function () {
    if (this.isStarted) return;
};

Timer.prototype.pauseResume = function () {
    this.isPaused = !this.isPaused;
};

Timer.prototype.stop = function () {
    clearInterval(this.interval);
    this.interval = 0;
    this.totalSeconds = 0;
    this.isStarted = false;
    this.isPaused = false;
    return this.updateDisplay();
};