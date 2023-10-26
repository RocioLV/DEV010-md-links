const makeAbsolute = require('./lib/makeAbsolute');
const pathExists = require('./lib/pathExists');
const isMarkdownFile = require('./lib/isMarkdownFile');
const readFileContent = require('./lib/readFileContent');
const extractLinks = require('./lib/extractLinks');
const validateLinks = require('./lib/validateLinks');

function mdLinks(path, validate = false) {
  const absolutePath = makeAbsolute(path);
  console.log(`Path: ${path}, Validate: ${validate}`);
  return pathExists(absolutePath)
    .then(() => isMarkdownFile(absolutePath))
    .then(() => readFileContent(absolutePath))
    .then((content) => {
      const links = extractLinks(content, absolutePath);
      if (validate) {
        return validateLinks(links);
      }
      console.log(`Ver si sale ${path}`);
      return links;
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
