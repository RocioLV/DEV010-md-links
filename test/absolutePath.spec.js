const path = require('node:path');
const absolutePath = require('../lib/absolutePath');

describe('absolutePath', () => {
  it('should be a function', () => {
    expect(typeof absolutePath).toBe('function');
  });
  it('should return an absolute path', () => {
    expect(absolutePath('README.md')).toBe(path.resolve('README.md'));
  });
});