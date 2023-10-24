function findLinks(data, filePath) {
    const regex = /\[([^\]]*)\]\((http[s]?:\/\/[^\)]*)\)/g;
    const links = [];
    let match;
    while ((match = regex.exec(data)) !== null) {
      links.push({
        href: match[2],
        text: match[1],
        file: filePath,
      });
    }
    return links;
  }
  
  module.exports = findLinks