export function Relay() {
    this.relayIndex = 0;
    this.startAllId = 55;
    this.stopAllId = 56;
    this.port = 30000;
    this.ip = '192.168.1.4';
    this.protocol = 'http://';
    this.isStart = {};
};

Relay.prototype.startAllRelay = function () {
    // fetch(`${this.protocol}${this.ip}/${this.port}/${this.startAllId}`);
    console.log(`${this.protocol}${this.ip}/${this.port}/${this.startAllId + 1}`);
};

Relay.prototype.stopAllRelay = function () {
    // fetch(`${this.protocol}${this.ip}/${this.port}/${this.stopAllId}`);
    console.log(`${this.protocol}${this.ip}/${this.port}/${this.stopAllId}`);
};

Relay.prototype.startRelay = function (deviceId) {
    this.isStart[deviceId] = !this.isStart[deviceId];
    this.relayIndex = (deviceId * 2) + 1;
    return `${this.protocol}${this.ip}/${this.port}/${this.relayIndex}`;
};

Relay.prototype.stopRelay = function (deviceId) {
    this.isStart[deviceId] = !this.isStart[deviceId];
    this.relayIndex = (deviceId * 2);
    return `${this.protocol}${this.ip}/${this.port}/${this.relayIndex}`;
};

Relay.prototype.toggleRelay = function (deviceId) {
    this.isStart[deviceId] = !this.isStart[deviceId];
    this.relayIndex = this.isStart[deviceId] ? (deviceId * 2) + 1 : (deviceId * 2);
    return `${this.protocol}${this.ip}/${this.port}/${this.relayIndex}`;
    // if (!this.isStart[deviceId]) {
    //     this.isStart[deviceId] = !this.isStart[deviceId];
    //     this.relayIndex = (deviceId * 2) + 1;
    //     return `${this.protocol}${this.ip}/${this.port}/${this.relayIndex}`;
    // }
    // else {
    //     this.isStart[deviceId] = !this.isStart[deviceId];
    //     this.relayIndex = (deviceId * 2);
    //     return `${this.protocol}${this.ip}/${this.port}/${this.relayIndex}`;
    // }
};