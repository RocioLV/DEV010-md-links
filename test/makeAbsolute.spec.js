const path = require('node:path');
const makeAbsolute = require('../lib/makeAbsolute');

describe('makeAbsolute', () => {
  it('should be a function', () => {
    expect(typeof makeAbsolute).toBe('function');
  });
  it('should return an absolute path', () => {
    expect(makeAbsolute('README.md')).toBe(path.resolve('README.md'));
  });
});