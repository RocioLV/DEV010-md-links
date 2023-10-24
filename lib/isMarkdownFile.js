const path = require('path');

function isMarkdownFile(filePath) {
  const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text', '.txt'];
  const fileExtension = path.extname(filePath).toLowerCase();
  
  if (!markdownExtensions.includes(fileExtension)) {
    throw new Error('The file is not a markdown file');
  }
  return true;
}


module.exports = isMarkdownFile;
