const extractLinks = require('../lib/extractLinks');

describe('extractLinks', () => {
  test('should extract links from content with one link', () => {
    const content = 'This is a [sample link](https://example.com) in the content.';
    const filePath = '/path/to/file.md';

    const result = extractLinks(content, filePath);

    expect(result).toEqual([
      {
        href: 'https://example.com',
        text: 'sample link',
        file: '/path/to/file.md',
      },
    ]);
  });
  
  test('should extract multiple links from content', () => {
    const content = `
        Check out these [links](https://link1.com) and [another link](https://link2.com).
      `;
    const filePath = '/path/to/another/file.md';

    const result = extractLinks(content, filePath);

    expect(result).toEqual([
      {
        href: 'https://link1.com',
        text: 'links',
        file: '/path/to/another/file.md',
      },
      {
        href: 'https://link2.com',
        text: 'another link',
        file: '/path/to/another/file.md',
      },
    ]);
  });

  test('should not extract links from content without links', () => {
    const content = 'This content has no links.';
    const filePath = '/path/to/file.txt';

    const result = extractLinks(content, filePath);

    expect(result).toEqual([]);
  });
});