const fs = require('fs');

function pathExists(filePath) {
  try {
    fs.accessSync(filePath);
    return true; // El archivo existe
  } catch (error) {
    throw new Error(`The file does not exist`);
  }
}

module.exports = pathExists;