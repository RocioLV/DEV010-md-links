// const fs = require('node:fs/promises');
// const path = require('node:path');

// function mdLinks(filePath) {
//   return new Promise((resolve, reject) => {
//     const absolutePath = path.resolve(filePath); // transforma la ruta a absoluta

//     fs.access(absolutePath) // comprueba que la ruta exista en el computador
//       .then(() => {
//         const markdownExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text', '.txt'];

//         const fileExtension = path.extname(absolutePath).toLowerCase(); // obtiene la extensión del archivo

//         if (!markdownExtensions.includes(fileExtension)) { // verifica si la extensión es válida
//           reject(new Error('El archivo no es de tipo Markdown'));
//         } else {
//           return fs.readFile(absolutePath, 'utf8'); // lee el archivo
//         }
//       })
//       .then((data) => {
//         const regex = /\[([^\]]*)\]\((http[s]?:\/\/[^\)]*)\)/g;
//         const links = []; // encuentra los links dentro del documento
        
//         let match;
//         while ((match = regex.exec(data)) !== null) {
//           links.push({
//             href: match[2],
//             text: match[1],
//             file: absolutePath,
//           });
//         }
        
//         resolve(links); // resuelve la promesa con los enlaces
//       })
//       .catch((error) => {
//         if (error.code === 'ENOENT') {// si la ruta es errónea, devuelve el mensaje de error
//           reject(new Error('La ruta no es válida'));
//         } else {
//           reject(error);
//         }
//       });
//   });
// }

// module.exports = mdLinks;
