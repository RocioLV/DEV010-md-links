const mdLinks = require('./index.js');
const filePath = './README.md';

console.log(mdLinks(filePath)) // El segundo argumento (true) habilita la validación.


// mdLinks(filePath, true) // El segundo argumento (true) habilita la validación.
//   .then(links => {
//     console.log('Links con validación:');
//     console.log(links);
//   })
//   .catch(error => {
//     console.error('Error al validar los enlaces:', error);
//   });

  

// const mdLinks = require('./index'); // Asegúrate de que el módulo esté en el directorio correcto

// const filePath = '/Users/shio/DEV010-md-links/examples/exampleLiksImg.md';

// mdLinks(filePath)
//   .then((links) => {
//     console.log('Enlaces encontrados:', links);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
