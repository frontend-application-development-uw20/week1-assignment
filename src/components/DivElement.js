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

const andIThinkToMyself = new DivElement('What a wonderful world');

console.log(andIThinkToMyself.render());
// prints "<div>What a wonderful world</div>"
