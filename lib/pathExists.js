const fs = require('node:fs');

function pathExists(filePath) {
  try {
    fs.accessSync(filePath);
    return true;
  } catch (error) {
    throw new Error(`The file ${filePath} does not exist`);
  }
}

module.exports = pathExists
