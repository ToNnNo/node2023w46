// pour récupérer et utiliser un module Node (commonJS), on utilise la fonction require()
/**
 * - dans l'application (module personnel)
 * - dans les dépendances (node_modules)
 * - dans l'API de NodeJS
 */
const path = require('path');

const file = "./content/file.txt";

console.log(`path.dirname(): ${path.dirname(file)}`);
console.log(`path.basename(): ${path.basename(file)}`);
console.log(`path.extname(): ${path.extname(file)}`);

console.log(`path.sep : ${path.sep}`);

// /images/thumbnail/logo.jpg
const pathToImage = path.join('images', 'thumbnail', 'logo.jpg');
console.log(`Chemin vers mon image: ${pathToImage}`);

const absolutePathToImage = path.join(__dirname, pathToImage);
console.log(`Chemin absolut vers mon image: ${absolutePathToImage}`);

console.log( path.resolve('images', 'thumbnail', 'logo.jpg') );