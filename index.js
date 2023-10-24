const absolutePath  = require('./lib/absolutePath.js');
const pathExists = require('./lib/pathExists.js');
const isMarkdownFile = require('./lib/isMarkdownFile.js');
const readFile = require('./lib/readFile.js');
const findLinks = require('./lib/findLinks.js');

function mdLinks(path){
    const validPath = absolutePath(path);
    return pathExists(validPath)
    .then(() => isMarkdownFile(validPath))
    .then(() => readFile(validPath))
    .then((content) => {
      const links = findLinks(content, validPath);
      // if(validate){
      //   return validateLinks(links);
      // }
      return links;
    });
  }

module.exports = mdLinks