let startRelay = document.querySelectorAll('.start'),
    stopRelay = document.querySelectorAll('.stop');

import { Relay } from './modules/_relay.js';

let relay = new Relay();

for (let i = 0; i < startRelay.length; i++) {
    startRelay[i].addEventListener('click', function (e) {
        e.preventDefault();
        // relay.startAllRelay();
        relay.toggleRelay(i);
    });
}

for (let i = 0; i < stopRelay.length; i++) {
    stopRelay[i].addEventListener('click', function (e) {
        e.preventDefault();
        // relay.stopAllRelay();
        relay.toggleRelay(i);
    });
}