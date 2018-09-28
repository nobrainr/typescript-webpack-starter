import { MyLibrary } from './MyLibrary';

console.log('See this in your browser console: Typescript Webpack Starter Launched');

const myLibrary = new MyLibrary();
const result = myLibrary.executeDependency();

console.log(`A random number ${result}`);
