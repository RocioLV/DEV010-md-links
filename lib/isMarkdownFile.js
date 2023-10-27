const path = require('path');

function isMarkdownFile(filePath) {
  const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
  const ext = path.extname(filePath).toLowerCase();
  if (markdownExtensions.includes(ext)) {
    return true;
  }
  throw new Error(`The extension ${ext} is not supported.`);
}

module.exports = isMarkdownFile;

// console.log(isMarkdownFile('/Users/shio/DEV010-md-links/examples/exampleLiksImg.md'))
// resuelve: true

// console.log(isMarkdownFile('./example.md'))
// resuelve: 'File not found'

// console.log(isMarkdownFile('/Users/shio/DEV010-md-links/examples/example.js'))
// resuelve: The file is not a markdown file