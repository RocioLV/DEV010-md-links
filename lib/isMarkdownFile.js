const path = require('  path');

function isMarkdownFile(filePath) {
  const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text', '.txt'];
  const fileExtension = path.extname(filePath).toLowerCase();
  if(markdownExtensions.includes(fileExtension)){
    return true;
  }
  throw new Error(`The file ${fileExtension} is not a markdown file`);
}

module.exports = isMarkdownFile
