// Ejercicio 11: Eliminar elementos del principio de un array usando shift()

// Dado un array 'arr', escribe una funcion 'removeFromFront' que tome un array como argumento y elimine el primer elemento del array usando el metodo 'shift()'. La funcion debe devolver el array modificado.


// Solucion:

var array = [1, 2, 3, 4, 5]

function removeFromFront(arr) {
    arr.shift()
    return arr
}

console.log(removeFromFront(array))

// Explicacion:
// En esta solucion, la funcion 'removeFromFront' utiliza el metodo shift() para eliminar el primer elemento del array 'arr'.