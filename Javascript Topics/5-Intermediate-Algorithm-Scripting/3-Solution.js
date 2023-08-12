/*
Task:

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that have the same value as any of these arguments.

Note: You have to use the arguments object.
 */


// Solution:

function destroyer(arr) {
    const args = Array.from(arguments).slice(1);

    return arr.filter(item => !args.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/*
Explained:
In this solution:

Array.from(arguments) converts the arguments object into an array.
slice(1) removes the first element (the initial array) from the array of arguments.
filter and includes methods are used to remove elements that match any of the arguments.
*/