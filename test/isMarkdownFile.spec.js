const isMarkdownFile = require('../lib/isMarkdownFile');

describe('isMarkdownFile', () => {
  it('should return true for valid Markdown file extensions', () => {
    const filePath = 'example.md';
    const result = isMarkdownFile(filePath);
    expect(result).toBe(true);
  });

  it('should throw an error for invalid file extensions', () => {
    const filePath = 'example.txt';
    expect(() => isMarkdownFile(filePath)).toThrowError('The file is not a markdown file');
  });
});
