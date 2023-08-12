/*
Where art thou

Create a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair from the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you should return the third object from the array (the first argument), because it contains the name and its value, which was passed as the second argument.
*/

// Solution:

function whatIsInAName(collection, source) {

    // Extract keys from the source object.
    const keys = Object.keys(source);

    // Filter the collection array
    return collection.filter(obj => {
        return keys.every(key => obj.hasOwnProperty(key))
    });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



/*
In this solution:

Object.keys(source) extracts the keys from the source object.
filter method is used to iterate over the collection.
Inside the filter callback, every method is used to ensure every key-value pair in source matches with the current object in the collection.
*/