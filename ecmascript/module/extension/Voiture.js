// module EcmaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
export default class Voiture {

    #marque; // #  = private
    #modele;

    constructor(marque, modele) {
        this.#marque = marque;
        this.#modele = modele;
    }

    detail() {
        return `Voiture [marque = ${this.#marque}; modele = ${this.#modele}]`;
    }

}

export function hi() {
    return "Salut ! 👋";
}

export function bye() {
    return "Good Bye 👋";
}