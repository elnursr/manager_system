export function Time({
    hours = 0,
    minutes = 0,
    seconds = 0,
    date = 0,
    timer = null,
    isStarted = false
} = {}) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.date = date;
    this.timer = timer;
    this.isStarted = isStarted;
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

    console.log(this.timer);
    
    this.date = new Date();

    let hours = this.date.getHours(),
        minutes = this.date.getMinutes(),
        seconds = this.date.getSeconds(),
        formattedHours = this.timer.setTwoDigitFormat(hours),
        formattedMinutes = this.timer.setTwoDigitFormat(minutes),
        formattedSeconds = this.timer.setTwoDigitFormat(seconds);

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}