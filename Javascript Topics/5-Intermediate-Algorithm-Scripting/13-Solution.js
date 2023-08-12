/*
    Sum All Prime Numbers

Given a positive integer num, return the sum of all prime numbers that are less than or equal to num.

For example, for the input 10, the prime numbers up to 10 are 2, 3, 5, 7. The sum of these prime numbers is 2 + 3 + 5 + 7 = 17.
*/

// Solution:
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function sumPrimes(num) {
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

sumPrimes(10);



/*
    Explained:The function isPrime checks if a number is prime. The function sumPrimes iterates through all numbers up to num and sums up the prime numbers.

*/