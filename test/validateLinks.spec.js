const validateLinks = require('../lib/validateLinks');

jest.mock('node-fetch', () => ({ // utiliza la función jest.mock() para simular el comportamiento de node-fetch
  __esModule: true, // es una propiedad especial que se utiliza en los módulos de JS para indicar que es un módulo de ES6
  // se utiliza principalmente cuando se exporta un objeto desde un módulo y se importa en otro lugar
  // al establecer __esModule: true, se indica que el obj exportado es un módulo ES6 válido y puede ser importado correctamente por otros archivos.
  default: jest.fn((url) => {
    if (url.startsWith('https://www.example.com')) { 
      // se verifica si la URL comienza con 'https://www.example.com' utilizando el método startsWith()
      return Promise.resolve({
        status: 200,
        statusText: 'OK',
      }); // devuelve una promesa resuelta con un objeto que contiene un estado 200 y un texto de estado 'OK'
    }
    return Promise.reject(new Error('Connection error'));
    // de lo contrario, devuelve una promesa rechazada con un error de conexión. 
  }), // esto permite simular respuestas exitosas o fallidas al hacer solicitudes HTTP.
}));

describe('validateLinks', () => {
  it('should handle links starting with "#" and return objects with null status and "No es un enlace" statusText', async () => {
    // verifica que la fx maneje correctamente los enlaces que comienzan con "#"
    const links = [ // crea un array de objetos links con dos elementos
      { href: '#section1', text: 'Section 1' },
      { href: '#section2', text: 'Section 2' },
    ];
    const result = await validateLinks(links); // se llama a la fx validateLinks pasando el array de enlaces 
    expect(result).toEqual([
      {
        href: '#section1', text: 'Section 1', status: null, statusText: `${links[0].href} is not a valid link.`,
      },
      {
        href: '#section2', text: 'Section 2', status: null, statusText: `${links[1].href} is not a valid link.`,
      },
    ]);
    // se espera que el resultado sea un array de objetos con las propiedades status y statusText establecidas en null y "is not a valid link."
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
// Este código prueba la función validateLinks para verificar si maneja correctamente los enlaces válidos e inválidos. Crea un array de objetos links con dos elementos, cada uno con una propiedad href y text. Luego llama a la función validateLinks pasando el array de enlaces y espera que el resultado sea un array de objetos con las propiedades status y statusText apropiadas. En este caso, se espera que el primer enlace tenga un estado 200 (OK) y el segundo enlace tenga un estado nulo y un texto de estado "Fail connection".