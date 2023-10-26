const { access } = require('fs/promises');

function pathExists(path){
  return access(path)
  .then(() => true)
  .catch(() => {
    const error = new Error(`The path ${path} does no exists.`);
    throw error;
  });
}

module.exports = pathExists;

// console.log(pathExists('/Users/shio/DEV010-md-links/README.md'))

// function pathExists(filePath) {
//   return new Promise((resolve, reject) => {
//     fs.access(filePath, (error) => {
//       if (error) {
//         reject(new Error(`The file does not exist`));
//       } else {
//         resolve(filePath); // Devuelve la misma ruta si existe
//       }
//     });
//   });
// }

// module.exports = pathExists;
