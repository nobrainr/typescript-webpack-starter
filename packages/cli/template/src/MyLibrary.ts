import { random } from 'lodash';

export interface Foo {
  executeDependency: Function;
}

export class MyLibrary implements Foo {
  executeDependency() {
    return random(0, 10);
  }
}

export default MyLibrary;
