const path = require('path');

function isMarkdownFile(filePath) { 
  // verifica si un archivo tiene una extensión de archivo compatible con Markdown
  const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
  const ext = path.extname(filePath).toLowerCase(); 
  // se obtiene la extensión del archivo utilizando el método path.extname y se convierte a minúsculas
  if (markdownExtensions.includes(ext)) {
    return true; // si la extensión está incluida en el array markdownExtensions, la función devuelve true
  }
  throw new Error(`The extension ${ext} is not supported.`);
} // de lo contrario, lanza un error indicando que la extensión no es compatible

module.exports = isMarkdownFile;

// console.log(isMarkdownFile('/Users/shio/DEV010-md-links/examples/exampleLiksImg.md'))
// resuelve: true

// console.log(isMarkdownFile('./example.md'))
// resuelve: 'File not found'

// console.log(isMarkdownFile('/Users/shio/DEV010-md-links/examples/example.js'))
// resuelve: The file is not a markdown file