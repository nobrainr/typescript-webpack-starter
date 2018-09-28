import { MyLibrary } from './MyLibrary';

describe('TypeScript WebPack Starter Tests', () => {
  it('A good way to start building an awesome library is by doing Unit Tests 👌🏽', () => {
    const myLibrary = new MyLibrary();
    const result = myLibrary.executeDependency();
    expect(result >= 0 && result <= 10).toBeTruthy();
  });
});
