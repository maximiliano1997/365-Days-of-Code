// 3-Escribir un programa que pida al usuario un número entero y muestre por pantalla si es múltiplo de 42.


let userInput = parseInt(prompt(' Ingresa un numero entero: '))


if (userInput % 42 == 0) {
    document.write(true)
    document.write(`\n, El numero ${userInput} es multiplo de 42`)
} else {
    document.write(false)
    document.write(`\n, El numero ${userInput} no es multiplo de 42`)
}