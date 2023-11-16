/*function ucfirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}*/

Object.defineProperty(String.prototype, 'ucfirst', {
    value: function() {
        return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    }
});

function hello(name = "world") {
    return `Hello ${name}`;
}

function addition(...values){
    // return values.reduce( (sum, value) => sum + value );

    return values.reduce( (sum, value) => {
        return sum + value;
    });
}

module.exports = { hello, addition };