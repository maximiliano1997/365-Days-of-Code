/*
    Everything be true

Check if the predicate (second argument) returns truthy (not just true) for all elements of a collection (first argument). For simplicity, the provided array will only contain objects, and each object will have only one property.

For example, for the input [{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }], "sex", the output should be true.
 */

// Solution:

function truthCheck(collection, pre) {
    return collection.every(obj => obj[pre]);
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");


/*
    Explained:
    The solution utilizes the every function, which tests whether all elements in the array pass the test provided by the provided function. The predicate function checks if the property (given by pre) exists and is truthy in each object of the collection.
 */