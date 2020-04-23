// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const greeting = `<${this.tag}>${this.content}</${this.tag}>`;
    return greeting;
  }
}
const lovelaceQuote = new HTMLElement('p', 'I am never so happy as when I am really engaged in good earnest...');
// lovelaceQuote.render();
console.log(lovelaceQuote.render());
// prints "<p>I am never so happy as when I am really engaged in good earnest...</p>"
// Export class here
export default HTMLElement;
