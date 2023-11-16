// executer un script node
// node path/to/file.js 
// si on ne précise pas le nom du fichier, le fichier index sera exécuté par défaut
let x = 1;

x = x + 1;
x += 1;

const firstname = "Stéphane";

console.log(firstname);

console.log("Hello World", 10, true);

// interpolation
console.log("Bonjour %s, comment ça va ?", firstname); // NodeJS
console.log(`Bonjour ${firstname}, comment ça va ?`); // EcmaScript
console.log('Bonjour ' + firstname + ', comment ça va ?'); // ES/JS

console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);

setTimeout( () => {
    console.log("J'ai été exécuté après 5sec");
}, 5000 );

console.log("Fin de script");