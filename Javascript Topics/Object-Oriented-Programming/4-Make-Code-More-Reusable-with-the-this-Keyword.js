/*
    Ejercici 4: Make Code More Reusable with the this Keyword
    Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.
*/

//Solution;

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs() { return "This dog has " + this.numLegs + " legs."; }
};

console.log(dog.sayLegs())



// Explained: 