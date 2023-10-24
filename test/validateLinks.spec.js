// Importa Axios y la función validateLinks
const axios = require('axios');
const validateLinks = require('../lib/validateLinks');

test('Ejemplo de test', async () => {
  // Supongamos que tienes un archivo Markdown con un enlace
  const markdownContent = '[Ejemplo](https://example.com)';

  // Mock de axios para simular la respuesta de la solicitud
  axios.get = jest.fn().mockResolvedValue({ status: 200 });

  const result = await validateLinks(markdownContent);

  // Realiza las aserciones según el resultado esperado
  expect(result).toEqual([
    {
      href: 'https://example.com',
      text: 'Ejemplo',
      status: 200,
    },
  ]);
});


// const validateLinks = require('../lib/validateLinks.js');

// jest.mock('node-fetch', () => ({
//   __esModule: true,
//   default: jest.fn((url) => {
//     if (url.startsWith('https://www.example.com')) {
//       return Promise.resolve({
//         status: 200,
//         statusText: 'OK',
//       });
//     }
//     return Promise.reject(new Error('Connection error'));
//   }),
// }));

// describe('validateLinks', () => {
//   it('should handle links starting with "#" and return objects with null status and "No es un enlace" statusText', async () => {
//     const links = [
//       { href: '#section1', text: 'Section 1' },
//       { href: '#section2', text: 'Section 2' },
//     ];
//     const result = await validateLinks(links);
//     expect(result).toEqual([
//       {
//         href: '#section1', text: 'Section 1', status: null, statusText: 'No es un enlace',
//       },
//       {
//         href: '#section2', text: 'Section 2', status: null, statusText: 'No es un enlace',
//       },
//     ]);
//   });
//   it('should handle both valid and invalid links and return objects with appropriate status and statusText properties', async () => {
//     const links = [
//       { href: 'https://www.example.com', text: 'Example' },
//       { href: 'https://www.invalid.com', text: 'Invalid' },
//     ];
//     const result = await validateLinks(links);
//     expect(result).toEqual([
//       {
//         href: 'https://www.example.com', text: 'Example', status: 200, statusText: 'OK',
//       },
//       {
//         href: 'https://www.invalid.com', text: 'Invalid', status: null, statusText: 'Error de conexión',
//       },
//     ]);
//   });
// });