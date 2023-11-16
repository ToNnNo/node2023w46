// la destructuration peut s'appliquer sur des tableaux et objets

const person = ['John', 'Doe', 'john.doe@gmail.com'];

// console.log(person[0]);

const [firstname, lastname, email, city = "Lille"] = ['John', 'Doe', 'john.doe@gmail.com'];
console.log(`Bonjour ${firstname} ${lastname} (${email}), vous êtes actuellement localisé à ${city}`);

const employee = { firstname: "John", lastname: "Doe", email: "john.doe@gmail.com" };

const { firstname: fname, lastname: lname, email: mail, city: cty = "Lille" } = employee;

console.log(`Bonjour ${fname} ${lname} (${mail}), vous êtes actuellement localisé à ${cty}`);

// Angular
function fullname(...params) {
    const [firstname, lastname, civility = null] = params;

    return `Bonjour ${civility ?? ''} ${firstname} ${lastname}`;
}

console.log(fullname('john', 'doe', "Dr"));

// React / VueJS
function objectFullname({firstname, lastname, civility = null}) {
    
    return `Bonjour ${civility ?? ''} ${firstname} ${lastname}`;
}

console.log(objectFullname(employee));