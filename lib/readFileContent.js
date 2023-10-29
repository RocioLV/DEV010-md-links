const readFile = require('fs/promises');
const { promises: fsPromises } = require('fs');

function readFileContent(filePath) { // lee el contenido de un archivo utilizando fsPromises.readFile
  return fsPromises.readFile(filePath, 'utf8') // fx toma como argumento la ruta del archivo y devuelve una promesa que se resuelve con el contenido del archivo en formato UTF-8
    .then((data) => data)
    .catch(() => {
      throw new Error(`The file ${filePath} could not be read.`);
    }); // si ocurre algún error durante la lectura del archivo, se lanza un error con un mensaje indicando el nombre del archivo que no pudo ser leído
}

module.exports = readFileContent