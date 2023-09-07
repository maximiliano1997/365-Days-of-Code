// 5-Escribir un programa que pida al usuario una cadena de caracteres y muestre por pantalla si contiene la letra "r".


let userInput = prompt('Ingrese una cadena de caracteres: ')

if (userInput.includes("r")) {
    console.log(`${true}, La cadena ${userInput} si contiene la letra "r"`)
} else {
    console.log(`${false}, La cadena ${userInput} no contiene la letra "r"`)
}