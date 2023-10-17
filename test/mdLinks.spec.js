const mdLinks = require('../lib/mdLinks');

describe('mdLinks', () => {
  it('debería retornar un array de objetos con los enlaces encontrados en el archivo', () => {
    const filePath = './ejemplos/ejemplo2.md';
    const expected = [
      {
        href: 'https://www.markdownguide.org "Markdown Guide"',
        text: 'Markdown Guide',
        file: '/Users/shio/DEV010-md-links/ejemplos/ejemplo2.md'
      },
      {
        href: 'https://nodejs.org "Node.js"',
        text: 'Node.js',
        file: '/Users/shio/DEV010-md-links/ejemplos/ejemplo2.md'
      }
    ];

    return mdLinks(filePath).then((result) => {
      expect(result).toEqual(expected);
    });
  });

  it('debería rechazar con un error si la ruta no es válida', () => {
    const filePath = 'ejemplos/archivoQueNoExiste.md';
    const expectedError = new Error('La ruta no es válida');

    return mdLinks(filePath).catch((error) => {
      expect(error).toEqual(expectedError);
    });
  });

  it('debería rechazar con un error si el archivo no es de tipo Markdown', () => {
    const filePath = './index.js';
    const expectedError = new Error('El archivo no es de tipo Markdown');

    return mdLinks(filePath).catch((error) => {
      expect(error).toEqual(expectedError);
    });
  });

  it('debería rechazar con un error si ocurre un error distinto a ENOENT', () => {
    const filePath = '.ejemplos/ejemplo2.md';
    const expectedError = new Error('La ruta no es válida');
  
    return mdLinks(filePath).catch((error) => {
      expect(error).toEqual(expectedError);
    });
  });
  
});
