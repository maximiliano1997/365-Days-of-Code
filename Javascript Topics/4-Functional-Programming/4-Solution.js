// Avoid Mutations and Side Effects Using Functional Programming



// The global variable

let fixedValue = 4;

function incrementer() {
    return fixedValue + 1;
}

var newValue = incrementer(); // Should be equal 5
console.log(fixedValue); // Sould print 4