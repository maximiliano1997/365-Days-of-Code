/*
    Ejercicio 19: Set the Child's Prototype to an Instance of the Parent

    Modify the code so that instances of Dog inherit from Animal.
*/



// Solution:

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();



// Explained: