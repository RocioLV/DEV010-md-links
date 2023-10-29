const fsPromises = require('fs/promises');
const readFileContent = require('../lib/readFileContent');

jest.mock('fs/promises');

describe('readFileContent', () => {
  it('should return the content of the file', () => {
    const filePath = '/Users/shio/DEV010-md-links/examples/example.txt';
    const content = 'This is a sample file content.';
    fsPromises.readFile.mockResolvedValue(content); // utilizando el método mockResolvedValue del objeto readFile
    return readFileContent(filePath)
      .then((result) => { // se simula la lectura exitosa del archivo 
        expect(result).toBe(content); // se espera que el resultado sea igual al contenido del archivo
      });
  });
  it('should return an error if the file could not be read', () => {
    const filePath = '/Users/shio/DEV010-md-links/examples/examplesss.txt';
    const error = new Error(`The file ${filePath} could not be read.`);
    fsPromises.readFile.mockRejectedValue(error);
    return readFileContent(filePath) // se simula un error al leer el archivo
      .catch((err) => {
        expect(err).toEqual(error); // se espera que se produzca un error con el mensaje adecuado
      });
  });
});