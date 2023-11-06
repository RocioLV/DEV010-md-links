const fsPromises = require('fs/promises');
const readFileContent = require('../lib/readFileContent');

jest.mock('fs/promises'); // se utiliza para simular el módulo fs/promises durante las pruebas
// permite controlar el comportamiento del módulo y facilita la escritura de pruebas unitarias más precisas y aisladas

describe('readFileContent', () => {
  it('should return the content of the file', () => { // verifica que la fn devuelva el contenido del archivo especificado por filePath
    const filePath = '/Users/shio/DEV010-md-links/examples/example.txt';
    const content = 'This is a sample file content.';
    fsPromises.readFile.mockResolvedValue(content); 
    // se utiliza el método mockResolvedValue del objeto readFile (para simular la lectura exitosa del archivo)
    // para establecer el valor de retorno como el contenido del archivo
    return readFileContent(filePath)
      .then((result) => { // se simula la lectura exitosa del archivo 
        expect(result).toBe(content); // se espera que el resultado sea igual al contenido del archivo
      });
  });
  it('should return an error if the file could not be read', () => {
    const filePath = '/Users/shio/DEV010-md-links/examples/examplesss.txt';
    const error = new Error(`The file ${filePath} could not be read.`);
    fsPromises.readFile.mockRejectedValue(error);
    // simula un error al leer el archivo utilizando fsPromises.readFile.mockRejectedValue(error)
    return readFileContent(filePath) // se simula un error al leer el archivo
      .catch((err) => { // se utiliza .catch() para capturar el error 
        expect(err).toEqual(error); // se espera que se produzca un error con el mensaje adecuado
        // y se verifica que sea igual al error esperado utilizando expect(err).toEqual(error)
      });
  });
});