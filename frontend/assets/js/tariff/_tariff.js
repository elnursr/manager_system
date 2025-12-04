export function Tariff({
    price = null,
    currency = '',
    pricePerTime = 1,
    isVIP = false
} = {}) {
    this.price = price;
    this.currency = currency;
    this.pricePerTime = pricePerTime;
    this.isVIP = isVIP;
}

Tariff.prototype.calculatePrice = function (userInputTime, userInputPrice) {
    this.pricePerTime = userInputPrice;
    this.price = (userInputTime * this.pricePerTime) / 3600;
    return `${this.price.toFixed(2)}`;
}