import HTMLElement from "./HTMLElement";

class DivElement extends HTMLElement {
  constructor(content) {
    super(content);
    this.tag = "div";
    this.content = content;
  }
}

export default DivElement;
