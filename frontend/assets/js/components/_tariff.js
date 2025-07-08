import { Timer } from './_timer.js';

let timer = new Timer();

export function Tariff(pricePerTime, isVIP = false) {
    this.isVIP = isVIP;
    this.pricePerTime = pricePerTime;
    this.price = 0;
    this.currency = '';
    this.isCalculated = false;
}

Tariff.prototype.calculatePrice = function (userInputTime) {
    if (!this.isCalculated) {
        this.isCalculated = true;
        this.price = (userInputTime * this.pricePerTime) / 3600;

        if (this.price >= 1) {
            this.currency = 'azn';
            return `${this.price.toFixed(2)}_${this.currency}`;
        }
        else {
            this.currency = 'qepik';
            return `${Math.trunc(this.price * 100)}_${this.currency}`;
        }
    }
    else {
        if (this.price >= 1) {
            this.currency = 'azn';
            return `${this.price.toFixed(2)}_${this.currency}`;
        }
        else {
            this.currency = 'qepik';
            return `${Math.trunc(this.price * 100)}_${this.currency}`;
        }
    }
}