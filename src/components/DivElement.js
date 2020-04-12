/*
 * > Create a class called DivElement that extends the HTMLElement class created previously.
 * You'll need to import the class made in step 1.
 * > This class should have a constructor with one parameter: content.
 * > This class should inherit the render function in the parent class (do not override it,
 * aka define it in DivElement).
 * > Within render, use a template literal to render the element.
 */

// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

// Export class here
export default DivElement;
