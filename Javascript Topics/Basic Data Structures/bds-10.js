// Ejercicio 10: Añadir elementos al principio de un array usando unshift()

// Dado un array 'arr' y un numero 'num', escribe una funcion 'addToFront' que tome un array y un numero como argumentos y añada el numero al frente del array usando el metodo 'unshift()'. La funcin debe devolver el array modificado.


let arr = [1, 2, 3, 4, 5];

function addToFront(arr, num) {
    let result = arr.unshift(num)
    return arr
}

console.log(addToFront(arr, 6))

// Explicacion:
// En esta solucion: 'addToFront' utiliza como metodo 'unshift()' para agregar el numero 'num' al inicio del array 'arr'.