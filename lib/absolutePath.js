const path = require('path');

function getAbsolutePath(filePath) {
  return path.resolve(filePath);
}

module.exports = {
  getAbsolutePath,
};
