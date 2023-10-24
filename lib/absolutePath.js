const path = require('node:path')

function absolutePath(filePath) {
  return path.resolve(filePath)
}

module.exports = absolutePath
