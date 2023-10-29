const pathExists = require('../lib/pathExists');

test('should return true if path exists', () => {
  const path = './README.md';
  return pathExists(path).then(result => {
    expect(result).toBe(true); // verifica si el camino especificado existe
  });
});

test('should return an error if path does not exist', () => {
  const path = 'C:/escritorio/README.md';
  return pathExists(path).catch(error => { // verifica si el camino especificado no existe
    expect(error.message).toBe(`The path ${path} does no exists.`); // espera que se genere un error con un mnsj
  });
});
