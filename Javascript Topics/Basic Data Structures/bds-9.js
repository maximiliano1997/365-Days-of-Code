// Ejercicio 9: Combinar arrays con el ooperador spread.

// Dado dos arrays 'arr1' y 'arr2', escribe una funcion 'combineArrays' que tome dos arrays como argumentos y devuelva un nuevo array que sea la combinacion de ambos inputs usando el operador spread.

// Resolucion:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2]
}

console.log(combineArrays(arr1, arr2))


// Explicacion:
// En esta solucion, la funcion 'combineArrays' utiliza el operador spread '...' para "descomponer" ambos 'arr1' y 'arr2' en sus elementos indivuduales. Estos elementos se utilizan luego para crear un nuevo array mas amplio.