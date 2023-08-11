/*
    Ejercicio 16: Understand the Prototype Chain

    Modify the code to show the correct prototype chain.
*/



// Solution:

function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


/*
    Explained:
    

*/