/*
Requirement:

Use the every method to check if every element in an array meets a criteria.

Use the every method within the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.
*/


// Solution:
function checkPositive(arr) {
    // Cambia solo el código debajo de esta línea

    return arr.every(val => val > 0);
    // Cambia solo el código encima de esta línea
};

checkPositive([1, 2, 3, -4, 5]);


/*
Explained:
In this solution:

every(val => val > 0) checks if every element in the array is greater than 0 (i.e., positive). If there's any element that is not positive, it will return false. If all are positive, it will return true.

*/