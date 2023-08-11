// Implement map on a Prototype

Array.prototype.myMap = function (callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
};

console.log([23, 65, 98, 5, 13].myMap(item => item * 2))
console.log(["naomi", "quincy", "camperbot"].myMap(item => item.toUpperCase()))
console.log([1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0]))


// Explained:

/*
    Tu código es correcto y has implementado correctamente el método `map` en el prototipo de `Array`. 

El método `myMap` que has definido toma una función de callback como argumento y crea un nuevo array. Para cada elemento en el array original (referido por `this`), llama a la función de callback con tres argumentos: el elemento actual, el índice del elemento actual y el array completo. Añade el resultado de la función de callback al nuevo array. Al final, devuelve el nuevo array.

Luego, has probado el método `myMap` con tres llamadas a `console.log`, todas las cuales deben imprimir el resultado esperado.

Por lo tanto, has logrado replicar el comportamiento del método incorporado `map` de JavaScript. ¡Bien hecho!
*/