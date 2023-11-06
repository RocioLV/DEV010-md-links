const pathExists = require('../lib/pathExists');

test('should return true if path exists', () => {
  const path = './README.md'; // verifica si el camino especificado existe
  return pathExists(path).then(result => { 
    expect(result).toBe(true); // se usa then para realizar una afirmación y verificar que el resultado sea verdadero
  });
});

test('should return an error if path does not exist', () => {
  const path = 'C:/escritorio/README.md';
  return pathExists(path).catch(error => { // verifica si el camino especificado no existe
    expect(error.message).toBe(`The path ${path} does no exists.`); 
  }); // espera que se genere un error con un mnsj específico utilizando catch y expect
});
