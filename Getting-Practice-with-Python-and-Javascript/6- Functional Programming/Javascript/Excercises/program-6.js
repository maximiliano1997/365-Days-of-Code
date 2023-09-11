// 6. Escribe una función que toma un número y calcula su factorial.


function factorial(n) {
    const numbers = Array.from({ length: n }, (_, i) => i + 1)

    return numbers.reduce((acc, val) => acc * val, 1)
    // console.log(numbers)
}

console.log(factorial(5))