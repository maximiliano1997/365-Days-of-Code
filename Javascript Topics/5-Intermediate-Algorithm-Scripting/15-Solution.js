/*
    Drop it

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/


// Solution:

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });


/*
    Explained:

    This solution iterates over the array and drops elements from the front using shift() until an element satisfies the function func or the array becomes empty.

*/