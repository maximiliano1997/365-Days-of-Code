// 1 - Escribe un programa que solicite al usuario dos números y luego imprima la distancia Manhattan entre esos dos puntos en un sistema de coordenadas 1D.La fórmula para la distancia Manhattan en 1D es: d = | x2 - x1 |

// Resolution:
let userInput = [
    parseInt(prompt('Ingresa primer numero: ')),
    parseInt(prompt('Ingresa segundo numero: '))
];

let resultado = Math.abs(userInput[1] - userInput[0])

console.log(`El resultado es: ${resultado}`)





// Si quieres usarlo con node.js tienes que usar redline :v