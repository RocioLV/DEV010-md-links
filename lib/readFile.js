const fs = require('fs/promises');

function readFile(filePath) {
  return fs.readFile(filePath);
}

module.exports = readFile