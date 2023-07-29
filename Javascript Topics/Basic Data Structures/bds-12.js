// Ejercicio 12: Recorrer un array con un for loop

// Dado un array 'arr', escribe una funcion 'printArray' que tome un array como argumento y imprima todos los elementos del array utilizando un bucle for.

// Solucion:

let arr = [1, 2, 3, 4, 5]

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray(arr)


// Explicacion:
// En esta solucion, la funcion 'printArray' utiliza un Bucle 'for' para iterar sobre todos los elementos del array 'arr' y los imprime utilizando 'console.log()'.