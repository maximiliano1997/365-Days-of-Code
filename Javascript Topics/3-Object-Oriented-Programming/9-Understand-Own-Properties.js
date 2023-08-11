/*
    Ejercicio 9 - Understand Own Properties
    Add the own properties of canary to the array ownProps.

*/


// Solution:
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}



/*
    Explained:
    o add the own properties of the canary object to the ownProps array, you should loop over the object's properties and check whether the property is an own property (not from the prototype chain) using the hasOwnProperty method. If the property is an own property, add it to the ownProps array:

    This code will add the name and numLegs properties to the ownProps array, assuming that Bird.prototype doesn't have any enumerable properties.
*/