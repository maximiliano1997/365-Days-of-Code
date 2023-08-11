// Ejercicio 15: Accede a los nombres de propiedad con la notación de corchetes.
// Hemos definido una función, checkInventory, que recibe como argumento un elemento escaneado. Devuelve el valor actual de la clave scannedItem en el objeto foods.Puedes asumir que sólo se proporcionarán claves válidas como argumento a checkInventory.

// Solucion: 
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}


console.log(checkInventory('apples'));



// Explicacion:
// En este código, foods[scannedItem] accede al valor de la clave scannedItem en el objeto foods. La clave es proporcionada como un argumento a la función checkInventory, así que este código te permitirá verificar el inventario de cualquier artículo pasando el nombre del artículo como una cadena a checkInventory.