import { HasFormatter } from "../interfaces/HasFormatter.js";
// class
export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  // method
  format() {
    return `${this.recipient} owed €${this.amount} for ${this.details}`;
  }
}
