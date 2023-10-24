const pathExists = require('../lib/pathExists');

test('should return true if path exists', () => {
  const path = './examples/ejemplo2.md';
  return pathExists(path).then(result => {
    expect(result).toBe(true);
  });
});

test('should return an error if path does not exist', () => {
  const path = 'C:/escritorio/README.md';
  return pathExists(path).catch(error => {
    expect(error.message).toBe('The file does not exist');
  });
});
