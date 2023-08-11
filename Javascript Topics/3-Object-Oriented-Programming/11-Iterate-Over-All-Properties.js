/*
    Ejercicio 11: Iterate Over All Properties

    Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
*/


// Solutiom:
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}






/*
    Explained:
    To add all of the own properties of beagle to the ownProps array, and all of the prototype properties of Dog to the prototypeProps array, you can use a for...in loop. You can then use the hasOwnProperty method to check if a property is an own property:

    This code iterates over all properties in beagle (including prototype properties). If a property is an own property of beagle (i.e., it's defined directly on the beagle object), it's added to ownProps. If it's not an own property, it must be a prototype property (i.e., it's defined on the Dog prototype), so it's added to prototypeProps.

After running this code, ownProps will contain 'name', and prototypeProps will contain 'numLegs', assuming that no other properties were added to the Dog prototype.

*/