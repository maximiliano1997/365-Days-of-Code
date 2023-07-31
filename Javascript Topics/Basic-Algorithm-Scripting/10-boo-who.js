/*
    Ejercicio 10- Boo-who

    Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

// Solution:

function booWho(bool) {
    return typeof bool === 'boolean';
}


console.log(booWho(null));
console.log(booWho(false));
console.log(booWho('hola'));