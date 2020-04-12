/*
 * > Create a class called HTMLElement. This class should have a constructor
 * with two parameters: tag and content. Both of these parameters should be
 * stored as instance variables within the class. Instance variables should
 * have the same names as the parameters.
 * > Once the HTMLElement class is created, add a function to the class called
 * render that can be called publicly. This function should return the HTML
 * element with the content provided.
 * > Within render, use a template literal to render the element.
 */

// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    const element = `<${this.tag}>${this.content}</${this.tag}>`;
    return element;
  }
}

// Export class here
export default HTMLElement;
