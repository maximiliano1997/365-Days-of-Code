/*
Requirement:

Use the some method to check if any element in an array meets a criteria.

Use the some method within the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.
*/


// Solution:

function checkPositive(arr) {
    // Cambia solo el código debajo de esta línea
    return arr.some(val => val > 0);
    // Cambia solo el código encima de esta línea
};

checkPositive([1, 2, 3, -4, 5]);


/*
    Explained:

    In this solution:

some(val => val > 0) checks if any element in the array is greater than 0 (i.e., positive). If there's at least one element that is positive, it will return true. Otherwise, it will return false.
*/