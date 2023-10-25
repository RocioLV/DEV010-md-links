const fs = require('fs/promises');

function readAndFindLinks(filePath) {
  return fs.readFile(filePath, 'utf-8')
    .then(fileContent => {
      const regex = /\[([^\]]*)\]\((http[s]?:\/\/[^\)]*)\)/g;
      const links = [];
      let match;
      while ((match = regex.exec(fileContent)) !== null) {
        const [, text, href] = match;
        links.push({
          href,
          text,
          file: filePath,
        });
      }
      return links;
    })
    .catch(error => {
      throw error;
    });
}

module.exports = readAndFindLinks;

// console.log(readAndFindLinks('/Users/shio/DEV010-md-links/README.md'))


// function findLinks(content, filePath) {
//     const regex = /\[([^\]]*)\]\((http[s]?:\/\/[^\)]*)\)/g;
//     const links = [];
//     let match;
//     while ((match = regex.exec(content)) !== null) {
//       const [, text, href] = match;
//       links.push({
//         href: match[2],
//         text: match[1],
//         file: filePath,
//       });
//       match = regex.exec(content)
//     }
//     return links;
//   }
  
//   module.exports = findLinks

//   console.log(findLinks('/Users/shio/DEV010-md-links/README.md'))