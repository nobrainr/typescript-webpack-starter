export interface Foo {
  executeDependency: Function;
}

export class MyLibrary implements Foo {
  executeDependency() {
    return Math.floor(Math.random() * 10 + 1);
  }
}

export default MyLibrary;
