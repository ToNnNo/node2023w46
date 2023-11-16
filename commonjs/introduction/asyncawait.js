// async permet de créer une fonction qui retourne une promise
// dans une fonction async, return permet de retourner une promise en réussite (resolve)
async function doSomething() {
    return "Bravo !";
}

// dans une fonction async, throw permet de retourner une promise en échec (reject)
async function doSomethingElse() {
    throw new Error("aie aie aie ...");
}

/*doSomething().then((result) => {
    console.log(result);
});

doSomethingElse().catch((error) => {
    console.log(error);
});*/

const { execSync } = require('child_process');

async function rollOfDice() {
    const value = Math.floor(Math.random() * 6 + 1);
    const fail = Math.floor(Math.random() * 3 + 1);
    
    execSync('sleep 1');

    if( fail == 1 ) {
        throw new Error('Cassé');
    }

    return value;  
}

// utiliser le await 

/*rollOfDice().then( (value) => {
    console.log(`Résultat obtenu: ${value}`);
}).catch( (error) => {
    console.log(error);
});*/

/*async function main() { 
    try {
        let v1 = await rollOfDice();
        console.log(`Résultat du 1er lancé: ${v1}`);
    } catch(e) {
        console.log(e);
    }

    try {
        let v2 = await rollOfDice();
        console.log(`Résultat du 2nd lancé: ${v2}`);
    } catch(e) {
        console.log(e);
    }
}

main();*/

// IIFE (Immediately Invoke Function Expression)
(async function(){
    try {
        let v1 = await rollOfDice();
        console.log(`Résultat du 1er lancé: ${v1}`);
    } catch(e) {
        console.log(e);
    }
})();