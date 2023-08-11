// Ejercicio 7: Comprobar si un elemento existe en un Array con indexOf()


// A continuación, se te proporciona un array arr de números. Escribe una función quickCheck que tome un array y un elemento como argumentos. La función debería devolver true si el elemento existe en el array y false si no existe.


// Resolution:

let arr = [1, 2, 3, 4, 5];

function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
}

console.log(quickCheck(arr, 3)); // Deberia dar true
console.log(quickCheck(arr, 6)); // Deberia dar false


// Explicacion:
// En esta solución, la función quickCheck usa el método indexOf para buscar elem en arr. Si elem se encuentra en el array, indexOf devolverá su índice (que siempre será igual o mayor a 0). Si elem no se encuentra en el array, indexOf devolverá -1.

