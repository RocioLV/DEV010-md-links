const mdLinks = require('./index.js'); // Asegúrate de que el nombre del archivo es correcto

mdLinks('README.md', true)
// mdLinks('exampleLinks.md', true) // Llama a mdLinks con los argumentos adecuados

  .then((result) => {
    console.log(result); // Hacer algo con los resultados
  })
  .catch((error) => {
    console.error(error); // Manejar errores, si los hay
  });


