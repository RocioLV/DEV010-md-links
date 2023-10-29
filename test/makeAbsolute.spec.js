const path = require('node:path');
const makeAbsolute = require('../lib/makeAbsolute');

describe('makeAbsolute', () => {
  it('should be a function', () => {
    expect(typeof makeAbsolute).toBe('function');
  }); //  verifica que la función devuelva una ruta absoluta al pasarle un nombre de archivo relativo
  it('should return an absolute path', () => {
    expect(makeAbsolute('README.md')).toBe(path.resolve('README.md'));
  }); // utiliza path.resolve para convertir el nombre de archivo en una ruta absoluta
});