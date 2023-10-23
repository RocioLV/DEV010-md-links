const mdLinks = require('../index');

describe('mdLinks', () => {
  it('debería retornar un array de objetos con los enlaces encontrados en el archivo', () => {
    return mdLinks(filePath).then(result => {
      
      expect(Array.isArray(result)).toBe(true); // Verifica que el resultado sea un array
      expect(result.length).toBeGreaterThan(0); // Verifica que el resultado contenga al menos un objeto
      expect(result).toEqual(expectedLinks); // Verifica que los enlaces sean iguales a los esperados
    });
  });

  it('debería rechazar con un error si la ruta no es válida', () => {
    return mdLinks(nonExistentFilePath).catch((error) => {
      expect(error.message).toBe(`La ruta "${nonExistentFilePath}" no existe o no es válida`);
    });
  });

  it('debería rechazar con un error si el archivo no es de tipo Markdown', () => {
    return mdLinks(nonMarkdownFilePath).catch((error) => {
      expect(error.message).toBe(`"${nonMarkdownFilePath}" no es un archivo Markdown`);
    });
  });

  it('debería rechazar con un error si el archivo no contiene enlaces', () => {
    const filePath = './ejemplos/ejemplo_sin_links.md';
    return mdLinks(filePath).catch((error) => {
      expect(error.message).toBe(`${filePath} no contiene enlaces en su contenido`);
    });
  });

  it('debería rechazar con un error si ocurre un error distinto a ENOENT', () => {
    return mdLinks(invalidFilePath).catch((error) => {
      expect(error.message).toBe(`La ruta "${invalidFilePath}" no existe o no es válida`);
    });
  });
});