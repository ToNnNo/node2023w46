function rollOfDice() {
    // [0; 1[
    const value = Math.floor(Math.random() * 6 + 1);
    const fail = Math.floor(Math.random() * 3 + 1);

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if( fail == 1 ) {
                reject('Cassé');
            }

            resolve(value);
        }, 1000 );
    } );
}

function successfull(value) {
    console.log(`Résultat obtenu: ${value}`);
}

function fail(error) {
    console.log(`Erreur obtenu: ${error}`);
}

rollOfDice()                // return une instance Promise (objet)
    .then( successfull )    // la réussite
    .catch(fail);           // l'échec

rollOfDice().then( (value) => {
    console.log(`Résultat du 1er lancé: ${value}`);

    return rollOfDice();
}).then( (value) => {
    console.log(`Résultat du 2nd lancé: ${value}`);

}).catch( (error) => {
    console.log(`Erreur obtenu: ${error}`);
});