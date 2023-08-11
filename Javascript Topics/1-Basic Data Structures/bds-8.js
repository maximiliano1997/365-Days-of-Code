// Ejercicio 8: Iterar a traves de todos los elementos de un array usando for loops.

// Dado un array arr, escribe una función iterateArray que tome un array como argumento y devuelva la suma de todos sus elementos.

// Resolution:

let arr = [1, 2, 3, 4, 5];

function iterateArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


console.log(iterateArray(arr)); // Deberia dar 15

// Explicacion:
// En esta solución, la función iterateArray itera sobre cada elemento en arr usando un bucle for.Para cada iteración, se suma el elemento actual al acumulador sum.Al final, la función devuelve sum.
