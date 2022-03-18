import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  // method
  constructor(private container: HTMLUListElement) {}
  // method has item which is a HasFormatter interface could be invoice or payment
  render(item: HasFormatter, heading: string, position: "start" | "end") {
    const li = document.createElement("li"); // create li element

    const h4 = document.createElement("h4"); // create h4 element
    h4.innerText = heading; // add text to h4 element
    li.append(h4); // add h4 element to li element

    const p = document.createElement("p"); // create p element
    p.innerText = item.format(); // add text to p element
    li.append(p); // add p element to li element

    if (position === "start") {
      this.container.prepend(li); // add li element to the start of the container
    } else {
      this.container.append(li); // add li element to the end of the container
    }
  }
}

/*
    1. register a list container (ul) in the constructor
    2. create a render method which takes an item, heading and position to render a new 'li' element to the container
        -- accepts arguments: invoice or payment, heading, position
        -- create the html template (li, h4, p)
        -- add the 'li' template to the start/end of the list
*/
