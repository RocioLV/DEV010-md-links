const fetch = require('node-fetch');

function validateLinks(links) {
  const linkPromises = links.map((link) => {
    if (link.href.startsWith('#')) {
      const updatedLink = { ...link };
      updatedLink.status = null;
      updatedLink.statusText = `${link.href} is not a valid link.`;
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
        updatedLink.statusText = 'Connection has failed.';
        return updatedLink;
      });
  });
  return Promise.all(linkPromises);
}

module.exports = validateLinks

// console.log(validateLinks('/Users/shio/DEV010-md-links/README.md'))