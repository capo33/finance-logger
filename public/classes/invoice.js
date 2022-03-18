// class
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // method
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
