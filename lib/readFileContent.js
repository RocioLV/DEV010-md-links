const readFile = require('fs/promises');
const { promises: fsPromises } = require('fs');

function readFileContent(filePath) {
  return fsPromises.readFile(filePath, 'utf8')
    .then((data) => data)
    .catch(() => {
      throw new Error(`The file ${filePath} could not be read.`);
    });
}

module.exports = readFileContent