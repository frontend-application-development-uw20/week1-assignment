// Import HTMLElement here
import HTMLElement from './HTMLElement';

// Define class here

class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}

const message = new DivElement('It\'s a beautiful life');
console.log(message.render());

// Export class here
export { DivElement as default };
