const axios = require('axios');
const readAndFindLinks = require('./readAndFindLinks');

function validateLinks(filePath, validate = false) {
  return readAndFindLinks(filePath)
    .then(links => {
      const linkValidations = links.map(link => {
        return axios
          .head(link.href)
          .then(response => {
            const result = {
              href: link.href,
              text: link.text,
              file: filePath,
            };
            if (validate) {
              result.status = response.status;
              result.ok = response.status >= 200 && response.status < 400 ? 'ok' : 'fail';
            }
            return result;
          })
          .catch(error => {
            const result = {
              href: link.href,
              text: link.text,
              file: filePath,
              status: null,
              ok: 'fail',
            };
            return result;
          });
      });
      return Promise.all(linkValidations);
    })
    .catch(error => {
      throw error;
    });
}

module.exports = validateLinks;

console.log(validateLinks('/Users/shio/DEV010-md-links/README.md'))

// const axios = require('axios');  // Importa la librería Axios para hacer peticiones HTTP.
// const findLinks = require('./readAndFindLinks');  // Importa un módulo local llamado findLinks.
// const fs = require('fs').promises;  // Importa el módulo fs (file system) con soporte para promesas.

// function validateLinks(filePath) { // Declaración de la función principal llamada "validateLinks".
//   return fs
//     .readFile(filePath, 'utf-8') // Se comienza por leer el contenido de un archivo cuya ruta se pasa como argumento.
//     .then(fileContent => { // Una vez que se ha leído el archivo, se ejecuta una función que encuentra los enlaces en el contenido.
//       const links = findLinks(fileContent); 
//       const linkValidations = links.map(link => { // A continuación, se realiza un mapeo de los enlaces encontrados para validarlos.
//         return axios
//           .head(link.href)
//           .then(response => {
//             const result = { // Cuando la petición a un enlace tiene éxito, se construye un objeto "result" con información relevante.
//               href: link.href, // La URL del enlace.
//               text: link.text, // El texto del enlace.
//               file: filePath, // La ruta del archivo que contiene el enlace.
//             };
//             if (axios) { // Si está validada, se verifica el estado de la respuesta HTTP.
//               result.status = response.status;  // El código de estado de la respuesta (p. ej. 200, 404, etc.).
//               result.ok = response.status >= 200 && response.status < 400 ? 'ok' : 'fail';  // Estado "ok" o "fail" basado en el código de estado.
//             }
//             return result; // Se retorna el objeto "result" con la información del enlace.
//           })
//           .catch(error => { // Cuando la petición a un enlace falla, se construye un objeto "result" con información de error.
//             const result = {
//               href: link.href,
//               text: link.text,
//               file: filePath,
//               status: null, // El estado se establece en "null" ya que la petición falló.
//               ok: 'fail', // Se establece "ok" en "fail" debido a la falla.
//             };
//             return result; // Se retorna el objeto "result" con información de enlace inválido.
//           });
//       });
//       return Promise.all(linkValidations); // Se retorna una promesa que se resolverá cuando todas las validaciones de enlaces estén completas.
//     })
//     .catch(error => {
//       throw error; // En caso de error al leer el archivo, se lanza una excepción.
//     });
// }

// module.exports = validateLinks; // Se exporta la función "validateLinks" para que pueda ser utilizada desde otros módulos.
