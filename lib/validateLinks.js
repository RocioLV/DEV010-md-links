const fetch = require('node-fetch');

function fetchData(url) {
  return fetch(url) // Realizar la solicitud HTTP
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json(); // Procesar la respuesta como JSON
    })
    .then((data) => {
      return data; // Devolver los datos
    })
    .catch((error) => {
      throw error; // Manejar errores
    });
}

// Ejemplo de uso
fetchData('https://api.example.com/data')
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
