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



// const axios = require('axios');
// const readAndFindLinks = require('./readAndFindLinks');

// function validateLinks(filePath, validate = false) {
//   return readAndFindLinks(filePath)
//     .then(links => {
//       const linkValidations = links.map(link => {
//         return axios
//           .head(link.href)
//           .then(response => {
//             const result = {
//               href: link.href,
//               text: link.text,
//               file: filePath,
//             };
//             if (validate) {
//               result.status = response.status;
//               result.ok = response.status >= 200 && response.status < 400 ? 'ok' : 'fail';
//             }
//             return result;
//           })
//           .catch(error => {
//             const result = {
//               href: link.href,
//               text: link.text,
//               file: filePath,
//               status: null,
//               ok: 'fail',
//             };
//             return result;
//           });
//       });
//       return Promise.all(linkValidations);
//     })
//     .catch(error => {
//       throw error;
//     });
// }

// module.exports = validateLinks;

// console.log(validateLinks('/Users/shio/DEV010-md-links/README.md'))


// // module.exports = validateLinks; // Se exporta la función "validateLinks" para que pueda ser utilizada desde otros módulos.
