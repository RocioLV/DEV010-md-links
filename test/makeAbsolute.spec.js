const path = require('node:path');
const makeAbsolute = require('../lib/makeAbsolute');

describe('makeAbsolute', () => {
  it('should be a function', () => {
    expect(typeof makeAbsolute).toBe('function');
  }); //  verifica que makeAbsolute sea una función utilizando el operador typeof y el método toBe
  it('should return an absolute path', () => {
    expect(makeAbsolute('README.md')).toBe(path.resolve('README.md'));
  }); // utiliza path.resolve para convertir el nombre de archivo en una ruta absoluta
      // y luego compara el resultado con el valor esperado utilizando método toBe 
});