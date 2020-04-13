class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const sTag = `<${this.tag}>`;
    const eTag = `</${this.tag}>`;
    const elem = sTag + this.content + eTag;
    return elem;
  }
}

export default HTMLElement;
