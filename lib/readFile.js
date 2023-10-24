const fs = require('fs');

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    throw new Error(`Error reading file ${filePath}: ${error.message}`);
  }
}

module.exports = readFile