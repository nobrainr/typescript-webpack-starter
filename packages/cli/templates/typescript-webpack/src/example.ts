export interface IFoo {
    bar: string;
  }
  
  export class Foo implements IFoo {
    bar = 'Typescript Example';
  
    greet() {
      return this.bar;
    }
  }
  