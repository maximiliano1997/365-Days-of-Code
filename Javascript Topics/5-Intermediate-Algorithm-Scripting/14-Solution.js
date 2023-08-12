/*
Least Common Multiple" (LCM) in English

First, let's understand how to calculate the LCM of two numbers. One approach to find the LCM of two numbers is by using the formula:
LCM

where GCD stands for the greatest common divisor.

Now, here's the solution to find the LCM of a range of numbers:

Create a helper function gcd to compute the greatest common divisor of two numbers.
Create another helper function lcm to compute the least common multiple of two numbers using the above formula.
Inside the main function, iterate over the range of numbers and compute the LCM.
*/

// Solution:
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function lcm(a, b) {
    return (a * b / gcd(a, b));
}

function smallestCommons(arr) {
    let [min, max] = arr.sort((a, b) => a - b);
    let multiple = min;

    for (let i = min + 1; i <= max; i++) {
        multiple = lcm(multiple, i);
    }
    return multiple;
}

smallestCommons([1, 5]); // This will print 60



/*
    Explained:


*/