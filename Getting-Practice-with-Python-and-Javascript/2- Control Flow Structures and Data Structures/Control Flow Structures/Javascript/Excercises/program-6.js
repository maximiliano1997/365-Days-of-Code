// 6-Escribir un programa que pida al usuario un número entero y muestre por pantalla si es múltiplo de 44.


let userInput = parseInt(prompt('Ingresa un numero entero: '))

if (userInput % 44 == 0) {
    console.log(`${true}, ${userInput} es multiplo de 44`)
} else {
    console.error(`${false}, ${userInput} no es multiplo de 44`)
}