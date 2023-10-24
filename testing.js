const mdLinks = require('./index'); // Asegúrate de que el módulo esté en el directorio correcto

const pathToMarkdownFile = '../examples/ejemplo1.md';

mdLinks(pathToMarkdownFile)
  .then((links) => {
    console.log('Enlaces encontrados:', links);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
