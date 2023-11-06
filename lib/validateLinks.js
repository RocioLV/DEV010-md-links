const fetch = require('node-fetch');
// este módulo permite realizar solicitudes HTTP desde un entorno de Node.js

function validateLinks(links) { // recibe un arreglo de objetos links
  const statusNames = { // mapea códigos de estados de la respuesta HTTP
    200: 'OK',
    301: 'Moved Permanently',
    302: 'Moved Temporarily',
    303: 'See Other',
    307: 'Temporary Redirect',
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
  }
  const linkPromises = links.map((link) => { 
    // crea un arreglo de promesas llamado linkPromises utilizando el método map para iterar sobre cada objeto link
    if (link.href.startsWith('#')) { // si el atributo href del link comienza con "#"
      const updatedLink = { ...link }; // se crea una copia del link actualizado 
      updatedLink.status = null; // con los atributos status y statusText modificados y se retorna
      updatedLink.statusText = `${link.href} is not a valid link.`;
      return updatedLink;
    }
    return fetch(link.href) // caso contrario, se realiza solicitud HTTP utilizando la fx fetch al enlace del objeto link
      .then((response) => { // si la solicitud es exitosa
        const updatedLink = { ...link }; // se crea una copia del link actualizado
        updatedLink.status = response.status; // con los atributos status 
        updatedLink.statusText = statusNames[response.status] || 'Unknown'; // y statusText obtenidos de la respuesta
        return updatedLink; // se retorna
      })
      .catch(() => {// si ocurre un error en la solicitud
        const updatedLink = { ...link }; // se crea una copia del link actualizado
        updatedLink.status = null; // con los atributos status y statusText modificados
        updatedLink.statusText = 'Connection has failed.'; // indicando que ha fallado la conexión
        return updatedLink;
      });
  });
  return Promise.all(linkPromises);
  // se retorna una promesa que resuelve cuando todas las promesas en linkPromises han sido resueltas
}

module.exports = validateLinks;


// console.log(validateLinks('/Users/shio/DEV010-md-links/README.md'))