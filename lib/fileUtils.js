const fs = require('node:fs');
const path = require('node:path');

function pathExists(filePath) {
  try {
    fs.accessSync(filePath);
    return true;
  } catch (error) {
    throw new Error(`The file ${filePath} does not exist`);
  }
}

function isMarkdownFile(filePath) {
  const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text', '.txt'];
  const fileExtension = path.extname(filePath).toLowerCase();
  if(markdownExtensions.includes(fileExtension)){
    return true;
  }
  throw new Error(`The file ${fileExtension} is not a markdown file`);
}

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    throw new Error(`Error reading file ${filePath}: ${error.message}`);
  }
}

module.exports = {
  pathExists,
  isMarkdownFile,
  readFile
};
