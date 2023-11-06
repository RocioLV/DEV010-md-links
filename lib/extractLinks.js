function extractLinks(content, filePath) {

  const regex = /\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/g;
  // utiliza expresión regular para buscar en el contenido las coincidencias de enlaces en formato Markdown
  const links = []; 
  // crea una variable links que es un arreglo vacío, luego se utilizará para almacenar los enlaces encontrados en el contenido del archivo
  let result = regex.exec(content); 
  // asigna el resultado de la ejecución de la expresión regular regex a la variable result
  while (result !== null) { 
    // el bucle se repetirá siempre que la expresión regular haya encontrado una coincidencia en el contenido
    const [, text, href] = result; 
    //  utiliza la desestructuración de arreglos en JavaScript para asignar los valores correspondientes a las variables text y href
    //  ignora el primer valor del arreglo result y asigna el segundo valor a la variable text y el tercer valor a la variable href
    links.push({ // agrega un objeto al arreglo links con 3 propiedades
      href,
      text, // los valores de href y text se toman de las variables del mismo nombre
      file: filePath, // el valor de la propiedad file se toma de la variable filePath
    });
    result = regex.exec(content); 
    // asigna el resultado de la ejecución de la expresión regular regex a la variable result
  } // permite buscar coincidencias en el contenido utilizando la expresión regular y almacenar el resultado para su posterior uso
  return links; // el resultado es un arreglo que contiene los enlaces encontrados en el contenido del archivo
}

module.exports = extractLinks;

// console.log(extractLinks('/Users/shio/DEV010-md-links/README.md'))

//console.log(readFile('/Users/shio/DEV010-md-links/examples/exampleLiksImg.md'))