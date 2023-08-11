/*
    Ejercicio 10: Use Prototype Properties to Reduce Duplicate Code

    Add a numLegs property to the prototype of Dog

*/

// Solution:

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");



/*
    Explained:
    n this code, Dog.prototype.numLegs = 4; adds a numLegs property to the prototype of Dog. Now, every instance of Dog (like beagle) will have access to this property, and its value will be 4.
*/