// Import HTMLElement here
// Import HTMLElement here
import HTMLElement from './HTMLElement';
// Define class here
class DivElement extends HTMLElement {
  constructor(content) {
    super('div', content);
  }
}
const andIThinkToMyself = new DivElement('What a wonderful world');
// andIThinkToMyself.render();
console.log(andIThinkToMyself.render());
// prints "<div>What a wonderful world</div>"
// Export class here
export default DivElement;
