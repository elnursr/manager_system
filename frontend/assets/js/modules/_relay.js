export function Relay() {
    this.startAllId = 55;
    this.stopAllId = 56;
    this.port = 30000;
    this.ip = '192.168.1.4';
    this.protocol='http://'
};

Relay.prototype.startAllRelay = function () {
    // fetch(`${this.protocol}${this.ip}/${this.port}/${this.startAllId}`);
    console.log(`${this.protocol}${this.ip}/${this.port}/${this.startAllId+1}`);
};

Relay.prototype.stopAllRelay = function (deviceId) {
    // fetch(`${this.protocol}${this.ip}/${this.port}/${this.stopAllId}`);
    console.log(`${this.protocol}${this.ip}/${this.port}/${this.stopAllId}`);
};

Relay.prototype.toggleRelay = function (deviceId) {
    console.log(`${this.protocol}${this.ip}/${this.port}/${deviceId}`);
};