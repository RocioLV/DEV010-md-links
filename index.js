const absolutePath = require('./lib/absolutePath');
const pathExists = require('./lib/pathExists');
const isMarkdownFile = require('./lib/isMarkdownFile');
const readAndFindLinks = require('./lib/readAndFindLinks');
const validateLinks = require('./lib/validateLinks');
const fs = require('fs').promises;

function mdLinks(filePath) {
  return absolutePath(filePath)
    .then((validPath) => {
      return pathExists(validPath)
        .then(() => isMarkdownFile(validPath))
        .then((isMarkdown) => {
          if (!isMarkdown) {
            return Promise.reject(new Error('La ruta no es un archivo Markdown o no existe.'));
          }
          return fs.readFile(validPath, 'utf-8')
            .then((content) => readAndFindLinks(content, validPath))
            .then((links) => {
              if (links) {
                return validateLinks(links);
              }
            });
        });
    });
}

module.exports = mdLinks;



// function mdLinks(filePath) {
//   const validPath = absolutePath(filePath);
//   if (typeof validPath === 'string') { // Verifica que validPath sea una cadena de texto válida antes de continuar.
//     return pathExists(validPath)
//       .then(() => isMarkdownFile(validPath))
//       .then((content) => {
//         const links = readAndFindLinks(content, validPath);
//         if (links) {
//           return validateLinks(links);
//         }
//         return alert(err);
//       });
//   } else {
//     return Promise.reject(new Error('La ruta no es una cadena de texto válida.'));
//   }
// }

// module.exports = mdLinks
