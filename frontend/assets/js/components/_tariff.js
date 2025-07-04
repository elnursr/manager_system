import { Timer } from './_timer.js';

let timer = new Timer();

export function Tariff(price, isVIP = false) {
    this.price = price;
    this.isVIP = isVIP;
    this.currency = '';
    this.isCalculates = false;
}

Tariff.prototype.calculatePrice = function (userInputTime) {
    if (!this.isCalculates) {
        this.isCalculates = true;
        this.price = (userInputTime * this.price) / 3600;

        if (this.price >= 1) {
            this.currency = '<i class="fa-solid fa-manat-sign"></i>';
            return `${this.price.toFixed(2)}_${this.currency}`;
        }
        else {
            this.currency = '<i class="fas fa-coins"></i>';
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