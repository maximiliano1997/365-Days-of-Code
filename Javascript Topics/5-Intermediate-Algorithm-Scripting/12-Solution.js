/*
    Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

For example, for the input 10, the Fibonacci sequence up to 10 is 1, 1, 2, 3, 5, 8. The sum of the odd numbers in this sequence is 1 + 1 + 3 + 5 = 10.
*/


//Solution:

function sumFibs(num) {
    let prev = 0;
    let curr = 1;
    let sum = 0;

    while (curr <= num) {
        if (curr % 2 !== 0) {
            sum += curr;
        }
        let next = curr + prev;
        prev = curr;
        curr = next;
    }

    return sum;
}

sumFibs(4);

/*
    Explained:
    This function generates Fibonacci numbers and keeps track of the sum of odd Fibonacci numbers less than or equal to num.
*/