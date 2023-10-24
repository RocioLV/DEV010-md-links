const path = require('path');

function isMarkdownFile(filePath) {
  const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text', '.txt'];
  const fileExtension = path.extname(filePath).toLowerCase();
  if (markdownExtensions.includes(fileExtension)) {
    return true;
  } else {
    throw new Error('The file is not a markdown file');
  }
}

module.exports = isMarkdownFile;
