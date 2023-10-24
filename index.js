const absolutePath  = require('./lib/absolutePath.js');
const pathExists = require('./lib/pathExists.js');
const isMarkdownFile = require('./lib/isMarkdownFile.js');
const readFile = require('./lib/readFile.js');
const findLinks = require('./lib/findLinks.js');
const validateLinks = require('./lib/validateLinks.js')

function mdLinks(path) {
  const validPath = absolutePath(path, validate = false);
  try {
    pathExists(validPath);
  } catch (error) {
    return Promise.reject(error); // Rechazar la promesa en caso de error
  }
  if (!isMarkdownFile(validPath)) {
    return Promise.reject(new Error(`The file is not a markdown file`)); // Rechazar la promesa si no es un archivo Markdown
  }
  return readFile(validPath)
    .then((content) => {
      const links = findLinks(content, validPath);
      if (validate) {
        return validateLinks(links);
      }
      return links;
    });
}

module.exports = mdLinks


// function mdLinks(path){
//     const validPath = absolutePath(path);
//     return pathExists(validPath)
//     .then(() => isMarkdownFile(validPath))
//     .then(() => readFile(validPath))
//     .then((content) => {
//       const links = findLinks(content, validPath);
//       // if(validate){
//       //   return validateLinks(links);
//       // }
//       return links;
//     });
//   }

// module.exports = mdLinks