// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    // eslint-disable-next-line no-console
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

// Export class here
export default HTMLElement;
