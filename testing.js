const mdLinks = require('./index'); // Asegúrate de que el módulo esté en el directorio correcto

const pathToMarkdownFile = './README.md';

mdLinks(pathToMarkdownFile)
  .then((links) => {
    console.log('Enlaces encontrados:', links);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
