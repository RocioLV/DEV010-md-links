const fs = require('node:fs');

function pathExists(filePath) {
  return new Promise((resolve, reject) => {
    fs.access(filePath, (error) => {
      if (error) {
        reject(new Error(`The file does not exist`));
      } else {
        resolve(filePath); // Devuelve la misma ruta si existe
      }
    });
  });
}

module.exports = pathExists

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


// console.log(pathExists('/Users/shio/DEV010-md-links/examples/exampleLiksImg.md'))