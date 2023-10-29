const path = require('path'); // importa módulo 'path' de node.js
// proporciona utilidades para trabajar con rutas de archivos y directorios

const makeAbsolute = (pathToMakeAbsolute) => path.resolve(pathToMakeAbsolute);
// la fx makeAbsolute toma una ruta relativa como argumento y utiliza el método resolve para convertirla en una ruta absoluta
// luego, devuelve la ruta absoluta resultante

module.exports = makeAbsolute;
// exporta la fx makeAbsolute para que pueda ser utilizada en otros archivos
// permite que otros módulos o scripts puedan acceder y utilizar la fx


// console.log(makeAbsolute('./README'))
// /Users/shio/DEV010-md-links/lib/README