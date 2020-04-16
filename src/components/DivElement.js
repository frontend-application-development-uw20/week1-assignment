// Import HTMLElement here
import HTMLElements from './HTMLElement';

// Define class here
class DivElement extends HTMLElements {
  constructor(content) {
    super(content);
    this.content = content;
    this.tag = 'div';
  }

}
// Export class here
export default DivElement;
