const fetch = require('node-fetch');

function validateLinks(links) {
  const linkPromises = links.map((link) => {
    if (link.href.startsWith('#')) {
      const updatedLink = { ...link };
      updatedLink.status = null;
      updatedLink.statusText = 'No es un enlace';
      return updatedLink;
    }
    return fetch(link.href)
      .then((response) => {
        const updatedLink = { ...link };
        updatedLink.status = response.status;
        updatedLink.statusText = response.statusText;
        return updatedLink;
      })
      .catch(() => {
        const updatedLink = { ...link };
        updatedLink.status = null;
        updatedLink.statusText = 'Error de conexión';
        return updatedLink;
      });
  });
  return Promise.all(linkPromises);
}

module.exports = validateLinks;