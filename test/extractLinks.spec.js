const extractLinks = require('../lib/extractLinks');

describe('extractLinks', () => {
  test('should extract links from content', () => { //  define una variable content con un texto que contiene enlaces
    const content = ` 
        Check out these [links](https://link1.com) and [another link](https://link2.com).
      `; // verifica que la fx extraiga correctamente los enlaces del contenido proporcionado
    const filePath = '/path/to/another/file.md';
    const result = extractLinks(content, filePath); // se llama a la pasando el contenido y la ruta del archivo
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
    ]); // se verifica que el resultado de la función sea igual a un arreglo de objetos
  }); // que contienen información sobre cada enlace extraído, incluyendo la URL, el texto del enlace y la ruta del archivo.

  test('should not extract links from content without links', () => { // no extraiga enlaces cuando el contenido no contiene ninguno
    const content = 'This content has no links.'; // define una variable content con un texto que no tiene enlaces
    const filePath = '/path/to/file.txt'; // se pasa a la función junto con la ruta del archivo
    const result = extractLinks(content, filePath);
    expect(result).toEqual([]); // si el contenido no contiene enlaces, la función devuelve un arreglo vacío
  });
});