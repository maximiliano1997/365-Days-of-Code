/*
    Ejercicio 22: Override inherited methods

    Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

*/

// Solution:
function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function () {
    return 'Alas, this is a flightless bird.'
}


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());


/*
    Explained:
*/