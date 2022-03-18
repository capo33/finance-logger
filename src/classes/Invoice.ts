import { HasFormatter } from "../interfaces/HasFormatter.js";
// class
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  // method
  format() {
    return `${this.client} owes €${this.amount} for ${this.details}`;
  }
}
