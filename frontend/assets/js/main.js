import { stopRelay, startRelay, toggleRelay } from './config/_variables.js';

import { Relay } from './components/_relay.js';

let relay = new Relay();

for (let i = 0; i < startRelay.length; i++) {
    startRelay[i].addEventListener('click', function (e) {
        e.preventDefault();
        console.log(relay.startRelay(i));
    });
}

for (let i = 0; i < stopRelay.length; i++) {
    stopRelay[i].addEventListener('click', function (e) {
        e.preventDefault();
        console.log(relay.stopRelay(i));
    });
}

for (let i = 0; i < toggleRelay.length; i++) {
    toggleRelay[i].addEventListener('click', function (e) {
        e.preventDefault();
        console.log(relay.toggleRelay(i));
    });
}