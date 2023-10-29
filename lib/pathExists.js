const { access } = require('fs/promises');
// esta fx se utiliza para comprobar si se puede acceder a un archivo o directorio en el sistema de archivos

function pathExists(path){
  return access(path) // comprobar si path existe
  .then(() => true) // si se puede acceder, devuelve true
  .catch(() => { 
    // bloque .catch() captura cualquier error que ocurra en la promesa anterior y ejecuta el código dentro de él
    const error = new Error(`The path ${path} does no exists.`); // si no se puede acceder, lanza un error indicando que path no existe
    throw error; // este error se arroja para ser manejado por el código que llama a la fx pathExists()
  });
}

module.exports = pathExists;

// console.log(pathExists('/Users/shio/DEV010-md-links/README.md'))
