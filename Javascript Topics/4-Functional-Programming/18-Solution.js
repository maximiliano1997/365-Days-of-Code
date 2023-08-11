
/*
Return a sorted array without changing the original array.

Use the sort method in the nonMutatingSort function to sort the items of an array in ascending order. The function should return a new array and not mutate the globalArray variable.

*/

// Solution:

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Cambia solo el código debajo de esta línea
    let copyArr = arr.slice();
    return copyArr.sort((a, b) => a - b);
    // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);

/*
    Explained:
    In this solution, the slice() method creates a copy of the arr array. Then, the sort() method sorts the copyArr array in ascending order. The original globalArray remains unchanged.
*/