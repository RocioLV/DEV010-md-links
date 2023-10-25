const path = require('node:path');

function absolutePath(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const resolvedPath = path.resolve(filePath);
      resolve(resolvedPath);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = absolutePath;


// console.log(absolutePath('./README'))
// /Users/shio/DEV010-md-links/lib/README