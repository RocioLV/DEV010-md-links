const isMarkdownFile = require('../lib/isMarkdownFile');

describe('isMarkdownFile', () => {
  it('should return true for valid Markdown file extensions', () => {
    const filePath = './README.md';
    const result = isMarkdownFile(filePath);
    expect(result).toBe(true);
  });

  it('should throw an error for invalid file extensions', () => {
    const filePath = './testing.js';
    expect(() => {
    isMarkdownFile(filePath);
    }).toThrowError(`The extension .js is not supported.`);
  });
});
