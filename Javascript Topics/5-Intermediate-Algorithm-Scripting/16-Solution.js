/*
    Steamroller

Flatten a nested array. You must account for varying levels of nesting.

For example, for the input [[["a"]], [["b"]]], the output should be ["a", "b"].
*/

// Solution:

function steamrollArray(arr) {
    let flattenedArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // Recursively flatten entries that are arrays
            // and push them onto the flattenedArray
            flattenedArray = flattenedArray.concat(steamrollArray(arr[i]));

        } else {
            // Push entries that are not arrays
            flattenedArray.push(arr[i]);
        }
    }

    return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);


/*
    Explained:
This solution uses a recursive approach to flatten arrays. If an entry in the array is an array itself, it calls steamrollArray recursively, otherwise, it pushes the entry onto the flattenedArray.
*/