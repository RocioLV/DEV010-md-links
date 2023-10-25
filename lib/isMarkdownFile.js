const path = require('node:path');
const fs = require('fs');

function isMarkdownFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return false; // Ruta no existe
  }
  const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text', '.txt'];
  const fileExtension = path.extname(filePath).toLowerCase();
  if (!markdownExtensions.includes(fileExtension)) {
    return false; // No es un archivo Markdown
  }
  return true;
}

module.exports = isMarkdownFile

// const path = require('node:path');
// const fs = require('fs');

// function isMarkdownFile(filePath) {
//   if (!fs.existsSync(filePath)) {
//     throw new Error('File not found');
//   }
//   const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text', '.txt'];
//   const fileExtension = path.extname(filePath).toLowerCase();
//   if (!markdownExtensions.includes(fileExtension)) {
//     throw new Error('The file is not a markdown file');
//   }
//   return true;
// }

// module.exports = isMarkdownFile;

// console.log(isMarkdownFile('/Users/shio/DEV010-md-links/examples/exampleLiksImg.md'))
// resuelve: true

// console.log(isMarkdownFile('./example.md'))
// resuelve: 'File not found'

// console.log(isMarkdownFile('/Users/shio/DEV010-md-links/examples/example.js'))
// resuelve: The file is not a markdown file