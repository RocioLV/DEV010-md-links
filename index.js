const absolutePath  = require('./lib/absolutePath');
const pathExists = require('./lib/pathExists');
const isMarkdownFile = require('./lib/isMarkdownFile');
const readFile = require('./lib/readFile');
const findLinks = require('./lib/findLinks');
const validateLinks = require('./lib/validateLinks')

function mdLinks(path) {
  const validPath = absolutePath(path, validate);
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
