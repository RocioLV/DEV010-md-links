const validateLinks = require('../lib/validateLinks');

jest.mock('node-fetch', () => ({
  __esModule: true,
  default: jest.fn((url) => {
    if (url.startsWith('https://www.example.com')) {
      return Promise.resolve({
        status: 200,
        statusText: 'OK',
      });
    }
    return Promise.reject(new Error('Connection error'));
  }),
}));

describe('validateLinks', () => {
  it('should handle links starting with "#" and return objects with null status and "No es un enlace" statusText', async () => {
    const links = [
      { href: '#section1', text: 'Section 1' },
      { href: '#section2', text: 'Section 2' },
    ];
    const result = await validateLinks(links);
    expect(result).toEqual([
      {
        href: '#section1', text: 'Section 1', status: null, statusText: `${links[0].href} is not a valid link.`,
      },
      {
        href: '#section2', text: 'Section 2', status: null, statusText: `${links[1].href} is not a valid link.`,
      },
    ]);
  });
  
  it('should handle both valid and invalid links and return objects with appropriate status and statusText properties', async () => {
    const links = [
      { href: 'https://www.example.com', text: 'Example' },
      { href: 'https://www.invalid.com', text: 'Invalid' },
    ];
    const result = await validateLinks(links);
    expect(result).toEqual([
      {
        href: 'https://www.example.com', text: 'Example', status: 200, statusText: 'OK',
      },
      {
        href: 'https://www.invalid.com', text: 'Invalid', status: null, statusText: 'Fail connection.',
      },
    ]);
  });  
});