const path = require('path');

const makeAbsolute = (pathToMakeAbsolute) => path.resolve(pathToMakeAbsolute);

module.exports = makeAbsolute;


// console.log(makeAbsolute('./README'))
// /Users/shio/DEV010-md-links/lib/README