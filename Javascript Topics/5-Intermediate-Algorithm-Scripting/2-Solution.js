/*
Task:

Compare two arrays and return a new array with the items found only in one of the two given arrays, but not in both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

// Solution:

function diffArray(arr1, arr2) {

    const diff1 = arr1.filter(item => !arr2.includes(item));

    const diff2 = arr2.filter(item => !arr1.includes(item));

    const newArr = diff1.concat(diff2);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/*
Explained:
In this solution:

filter and includes methods are used to extract the symmetric difference.
concat method combines the differences from both arrays into a single array.

*/