import { EnEurosPipe } from './en-euros.pipe';

describe('EnEurosPipe', () => {
  it('create an instance', () => {
    const pipe = new EnEurosPipe();
    expect(pipe).toBeTruthy();
  });
});
