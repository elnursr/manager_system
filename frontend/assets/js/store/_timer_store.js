export let timerList = [];

export function setTimer(index, timerInstance) {
    timerList[index] = timerInstance;
}

export function getTimer(index) {
    return timerList[index];
}