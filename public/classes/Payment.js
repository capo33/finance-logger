// class
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // method
    format() {
        return `${this.recipient} owed €${this.amount} for ${this.details}`;
    }
}
