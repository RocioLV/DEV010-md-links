const isMarkdownFile = require('../lib/isMarkdownFile');

describe('isMarkdownFile', () => {
  it('should return true for valid Markdown file extensions', () => {
    const filePath = './README.md';
    const result = isMarkdownFile(filePath);
    expect(result).toBe(true); 
  }); // verifica que la fx devuelva true para las extensiones de archivo Markdown válidas

  it('should throw an error for invalid file extensions', () => {
    const filePath = './testing.js';
    expect(() => {
    isMarkdownFile(filePath);
    }).toThrowError(`The extension .js is not supported.`);
  }); // verifica que se lance un error para las extensiones de archivo no válidas
});
