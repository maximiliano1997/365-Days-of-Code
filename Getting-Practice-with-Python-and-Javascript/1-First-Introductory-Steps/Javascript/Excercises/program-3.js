// 3-Crea un programa que pida al usuario un número entero y luego imprima todos los números desde 1 hasta ese número, pero reemplaza los múltiplos de 3 con "Fizz", los múltiplos de 5 con "Buzz" y los múltiplos de ambos con "FizzBuzz".


let userInput = parseInt(prompt(' Ingresa un numero Entero: '))


for (let i = 0; i < userInput; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
    }
    else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}