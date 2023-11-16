const fs = require('fs').promises; // fs depuis l'api promise
const path = require('path');

const pathfile = path.join(__dirname, 'public', 'text', 'file.txt');
const content = "Hello Async Await\r\n";

// 1. création des répertoires
// 2. créer et écrire dans le fichier file.txt
// 3. lire le fichier file.txt

(async function(){
    try {
        await fs.mkdir(path.dirname(pathfile), { recursive: true });
        console.log('Les répertoires ont bien créés');

        await fs.writeFile(pathfile, content, { flag: 'a'});
        console.log('Ecriture terminée');

        const data = await fs.readFile(pathfile);
        console.log(`${data}`);
    } catch (error) {
        console.log(error);
    }
})(); 