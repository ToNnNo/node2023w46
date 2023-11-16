function slow(time) {
    console.log(`run slow with ${time}`);
    return new Promise( resolve => {
        setTimeout(resolve, time, `execute after ${time} second`)
    });
}

(async () => {
    /*let r1 = await slow(2);
    console.log(r1);

    let r2 = await slow(2);
    console.log(r2);

    let r3 = await slow(2);
    console.log(r3);*/

    let [r1, r2, r3] = await Promise.all([slow(1000), slow(10000), slow(5000)]);
    console.log(r1);
    console.log(r2);
    console.log(r3);

})();