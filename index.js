const { absolutePath } = require('node:path');
const { pathExists, isMarkdownFile, readFile } = require('./fileUtils');
const { findLinks } = require('./linksUtils');

function mdLinks(path) {
    const validPath = absolutePath(path);
    return pathExists(validPath)
    .then(() => absolutePath(validPath))
    .then(() => isMarkdownFile(validPath))
    .then(() => readFile(validPath))
    .then((content) => {
        const links = findLinks(content);
        return links;
    });
}

module.exports = mdLinks;

