/*
    Ejercicio 3: Create a Method on an Object
    Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

*/



// Solution;

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs() {
        return 'This dog has ' + this.numLegs + ' legs.';
    }
};

console.log(dog.sayLegs());