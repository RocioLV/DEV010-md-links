const fs = require('fs');

function pathExists(filePath) {
  return new Promise((resolve, reject) => {
    fs.access(filePath, (error) => {
      if (error) {
        reject(new Error(`The file does not exist`));
      } else {
        resolve(true);
      }
    });
  });
}

module.exports = pathExists;