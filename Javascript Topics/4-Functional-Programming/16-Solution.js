/*
Requirement:

Use higher order functions "map", "filter", or "reduce" to solve a complex problem.

Complete the code for the function squareList using any combination of map(), filter(), and reduce(). The function should return a new array that contains the squares of only the positive integers (decimal numbers are not integers) when passed an array of real numbers. An example of an array containing real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loop or the forEach() function.
*/


//Solution:

const squareList = arr => {
    return arr
        .filter(num => num > 0 && Number.isInteger(num))
        .map(num => num * num);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);


/*
Explained:
In this code:

filter(num => num > 0 && Number.isInteger(num)) filters only the numbers that are positive and integers.
map(num => num * num) takes each of those numbers and squares them.

*/