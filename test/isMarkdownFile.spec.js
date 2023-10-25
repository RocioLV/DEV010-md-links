const isMarkdownFile = require('../lib/isMarkdownFile');

describe('isMarkdownFile', () => {
  it('should return true for valid Markdown file extensions', () => {
    const filePath = './README.md';
    const result = isMarkdownFile(filePath);
    expect(result).toBe(true);
  });

  it('should throw an error for a file not found', () => {
    const filePath = './ejmplos.md';
    expect(() => isMarkdownFile(filePath)).toThrowError('File not found');
  });

  it('should throw an error for invalid file extensions', () => {
    const filePath = './testing.js';
    expect(() => isMarkdownFile(filePath)).toThrowError('The file is not a markdown file');
  });
});
