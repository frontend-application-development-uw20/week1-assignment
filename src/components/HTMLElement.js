// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

// const htmlElement = new HTMLElement('p', 'Hello World!');
// console.log(htmlElement.render());

// Export class here
export { HTMLElement as default };
