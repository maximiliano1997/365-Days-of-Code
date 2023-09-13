
// 7 - Escribir un programa que pida al usuario un número entero y muestre por pantalla si es múltiplo de 45.


let userInput = parseInt(prompt('Ingresa un numero entero: '))

if (userInput % 45 == 0) {
    console.log(`${true}, El numero ${userInput} es multiplo de 45!`)
} else {
    console.log(`${false}, El numero ${userInput} no es multiplo de 45!`)
}