const mdLinks = require('./lib/mdLinks');
const pathToMarkdown = './ejemplo.md';

mdLinks(pathToMarkdown)
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.error(error);
  });