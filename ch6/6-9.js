export class Reading {
    #customer;
    #quantity;
    #month;
    #year;

    constructor(data) {
        this.#customer = data.customer;
        this.#quantity = data.quantity;
        this.#month = data.month;
        this.#year = data.year;
    }

    get customer() {
        return this.#customer;
    }

    get year() {
        return this.#year;
    }

    get quantity() {
        return this.#quantity;
    }

    get month() {
        return this.#month;
    }

    get baseRate() {
        if (this.#year === 2017 && this.#month === 5) return 0.1;
        return 0.2;
    }

    baseCharge() {
        return this.baseRate * this.quantity;
    }

    get taxThreshold() {
        return 0.1;
    }

    get taxableCharge() {
        return Math.max(0, this.baseRate - this.taxThreshold);
    }
}

const reading = new Reading({customer: 'ivan', quantity: 10, month: 5, year: 2017});


export function acquireReading() {
    return reading;
}
