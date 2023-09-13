// 7-Crea un programa que pida al usuario una cadena de caracteres y luego imprima el número de palabras en esa cadena que tienen más de 5 letras.


let userInput = prompt('Ingresa una cadena de palabras: ')
let contador = 0;

const lista = userInput.split(' ')

for (let i = 0; i < lista.length; i++) {

    // console.log(lista[i].length)
    if (lista[i].length > 5) {
        contador += 1;
    }
}

console.log(contador)
