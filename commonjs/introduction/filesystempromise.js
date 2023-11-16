const fs = require('fs').promises; // fs depuis l'api promise
const path = require('path');

const pathfile = path.join(__dirname, 'public', 'text', 'file.txt');
const content = "Hello Promise\r\n";

// 1. création des répertoires
// 2. créer et écrire dans le fichier file.txt
// 3. lire le fichier file.txt

fs.mkdir(path.dirname(pathfile), { recursive: true }).then( () => { // réussite
    console.log('Les répertoires ont bien créés');

    return fs.writeFile(pathfile, content, { flag: 'a'});
}).then(() => {
    console.log('Ecriture terminée');

    return fs.readFile(pathfile) 
}).then((data) => {
    // console.log(data.toString('utf8'));
    console.log(`${data}`);
}).catch((error) => {
    console.log(error);
});
