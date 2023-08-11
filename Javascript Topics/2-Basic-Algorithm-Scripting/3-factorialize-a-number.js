/*
Ejercicio 3: Factorialize a Number

Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/



// Solution:
function factorialize(num) {
    let counter = 1
    for (let i = 1; i <= num; i++) {
        counter = counter * i
    }
    return counter;
}

console.log(factorialize(5))