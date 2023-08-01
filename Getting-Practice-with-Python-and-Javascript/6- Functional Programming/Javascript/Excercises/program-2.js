//2. Escribe una función que toma una lista y devuelve una nueva lista con todos los elementos duplicados.




function repeater(arg) {
    let nuevaLista = []
    for (let i = 0; i < arg.length; i++) {
        nuevaLista = nuevaLista.concat(Array(2).fill(arg[i]))
    }
    console.log(nuevaLista)
}


repeater([1, 2, 3, 4, 5])

// Explicacion:

/*
Por ejemplo, puedes usar un bucle o el método Array.prototype.fill() para repetir elementos individuales.

En este código, Array(2).fill(arg[i]) crea una nueva lista con el elemento actual repetido dos veces, y luego se concatena a 'nuevaLista'.

`Array.prototype.fill()` es un método incorporado en JavaScript que se utiliza para llenar o modificar todos los elementos en un arreglo (array) a partir del índice inicial hasta el índice final con un valor estático.

Aquí tienes la sintaxis de este método:

```javascript
arr.fill(value[, start[, end]])
```

- `value`: El valor con el que llenar el arreglo.
- `start` (opcional): El índice desde donde empezar a llenar. Si se omite, se asume que es 0.
- `end` (opcional): El índice donde terminar de llenar. Este índice no se incluye en el nuevo arreglo. Si se omite, se asume que es `arr.length`.

Un ejemplo de uso de este método sería:

```javascript
let arr = [1, 2, 3, 4, 5];
arr.fill(0, 2, 4);
console.log(arr); // Output: [1, 2, 0, 0, 5]
```

En este ejemplo, el método `fill()` cambia los elementos del tercer al cuarto índice en el arreglo con el valor `0`. Toma en cuenta que el índice en JavaScript comienza en 0, por lo tanto, el índice 2 es el tercer elemento y el índice 4 es el quinto elemento. 

Además, el parámetro `end` es exclusivo, lo que significa que el método `fill()` llenará el arreglo hasta un índice antes del índice `end`. En este caso, el índice `end` es 4, por lo que se llena hasta el índice 3 (el cuarto elemento). 

También es importante mencionar que `Array.prototype.fill()` modifica el arreglo original. Si no quieres cambiar el arreglo original, deberías hacer una copia del arreglo antes de usar este método.

//------------------------------------------------------------------

En la expresión `Array(2).fill(arg[i])` se están combinando dos métodos de JavaScript:

1. `Array(2)`: Crea un nuevo arreglo con dos espacios vacíos. En JavaScript, `Array(n)` crea un nuevo arreglo con `n` espacios vacíos.

2. `.fill(arg[i])`: Llena todos los espacios en el arreglo creado con el valor `arg[i]`. Aquí `arg[i]` se refiere al `i`-ésimo elemento del arreglo `arg`.

Por lo tanto, `Array(2).fill(arg[i])` crea un nuevo arreglo con dos elementos, ambos iguales al `i`-ésimo elemento del arreglo `arg`.

Por ejemplo, si `arg` es `[1, 2, 3, 4, 5]` y `i` es `1`, entonces `arg[i]` es `2` y `Array(2).fill(arg[i])` será `[2, 2]`.

Esto se utiliza comúnmente para duplicar elementos de una lista, como en tu ejemplo anterior, donde se duplicaron todos los elementos de la lista de entrada.

*/
