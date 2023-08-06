/*
    Ejercicio 20: Reset an Inherited Constructor Property

    Fix the code so duck.constructor and beagle.constructor return their respective constructors.
*/


// Solution: 

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();


/*
    Explained:


*/