function useless(callback) { // callable
    // ...
    console.log("coucou");

    callback(1);
}

function myCustomCallback(integer){
    console.log("Script terminé");
}

useless(myCustomCallback);

useless((integer) => {
    console.log("2nd fin du script " + integer);
})