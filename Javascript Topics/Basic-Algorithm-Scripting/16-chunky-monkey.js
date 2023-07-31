/*
    Ejercicio 16 - Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/


// Error
// function chunkArrayInGroups(arr, size) {
//     let numWork = arr.length / 2
//     let num1 = arr.slice(0, numWork)
//     let num2 = arr.slice(numWork)

//     let results = [[...num1], [...num2]]

//     return results;
//     console.log(results)
//     // console.log(num1)
//     // console.log(num2)
// }


// Solution:

function chunkArrayInGroups(arr, size) {
    let result = [];
    while (arr.length) {
        result.push(arr.splice(0, size));
    }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", 3, 3], 2))