// Import.
import { Cat } from './cats.js';

// Create instance of Cat.
const cat = new Cat();

// Create function that meow ASCII cat.
const meow = () => console.log(cat.meow());

// Export.
export { Cat, meow };
