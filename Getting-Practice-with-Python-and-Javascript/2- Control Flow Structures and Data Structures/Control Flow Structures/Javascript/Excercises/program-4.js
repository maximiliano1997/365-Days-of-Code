// 4-Escribir un programa que pida al usuario un número entero y muestre por pantalla si es múltiplo de 43.


userInput = parseInt(prompt('Ingresa un numero entero: '))


if (userInput % 43 == 0) {
    console.log(true)
    document.write(`El numero ${userInput} es multiplo de 43`)
} else {
    console.log(false)
    document.write(`El numero ${userInput} no es multiplo de 43`)
}





