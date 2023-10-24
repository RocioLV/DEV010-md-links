const axios = require('axios');
const findLinks = require('./findLinks');
const fs = require('fs').promises;

function validateLinks(filePath, validate = false) {
  return fs
    .readFile(filePath, 'utf-8')
    .then(fileContent => {
      const links = findLinks(fileContent);
      const linkValidations = links.map(link => {
        return axios
          .head(link.href)
          .then(response => {
            const result = {
              href: link.href,
              text: link.text,
              file: filePath,
            };
            if (validate) {
              result.status = response.status;
              result.ok = response.status >= 200 && response.status < 400 ? 'ok' : 'fail';
            }
            return result;
          })
          .catch(error => {
            const result = {
              href: link.href,
              text: link.text,
              file: filePath,
              status: null,
              ok: 'fail',
            };
            return result;
          });
      });

      return Promise.all(linkValidations);
    })
    .catch(error => {
      throw error;
    });
}

module.exports = validateLinks;
