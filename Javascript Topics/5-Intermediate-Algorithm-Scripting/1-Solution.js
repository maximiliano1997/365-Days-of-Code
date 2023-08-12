/*
    Sum all numbers in a range.

    We'll pass an array of two numbers to you. Return the sum of those two numbers plus the sum of all numbers between them. The lowest number will not always come first.

For instance, sumAll([4,1]) should return 10 because the sum of all numbers between 1 and 4 (both inclusive) is 10.
*/


// Solution:

function sumAll(arr) {
    // Find minimum and maximum numbers in the array
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);

    let total = 0;

    // Sum numbers from minimum to maximum
    for (let i = min; i <= max; i++) {
        total += i;
    }

    return total;
}

sumAll([1, 4]);



/*
    Explained:
    In this solution:

Math.min and Math.max functions are used to determine the minimum and maximum values in the array.
A for loop then sums up all the numbers from the minimum value to the maximum value.
*/