function extractLinks(content, filePath) {
  const regex = /\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/g;
  const links = [];
  let result = regex.exec(content);
  while (result !== null) {
    const [, text, href] = result;
    links.push({
      href,
      text,
      file: filePath,
    });
    result = regex.exec(content);
  }
  return links;
}

module.exports = extractLinks;

// console.log(extractLinks('/Users/shio/DEV010-md-links/README.md'))

//console.log(readFile('/Users/shio/DEV010-md-links/examples/exampleLiksImg.md'))