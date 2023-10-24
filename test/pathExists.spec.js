const pathExists = require('../lib/pathExists');

test('should return true if path exists', () => {
  const path = 'C:/Users/shio/DEV010-md-links/examples/ejemplo2.md';
  const result = pathExists(path);
  expect(result).toBe(true);
});

test('should return an error if path does not exist', () => {
  const path = 'C:/escritorio/README.md';
  expect(() => pathExists(path)).toThrowError('The file does not exist');
});
