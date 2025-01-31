export function Audio() {

}

Audio.prototype.playSound = function (element) {
    element.play();
};

Audio.prototype.stopSound = function (element) {
    element.pause();
    element.currentTime = 0;
};