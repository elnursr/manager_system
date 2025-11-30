export function Tariff({
    price = 0,
    currency = '',
    pricePerTime = 0,
    isVIP = false,
    isCalculated = false
} = {}) {
    this.price = price;
    this.currency = currency;
    this.pricePerTime = pricePerTime;
    this.isVIP = isVIP;
    this.isCalculated = isCalculated;
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