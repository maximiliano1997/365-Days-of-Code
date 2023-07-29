// Ejercicio 16: Usa la palabra clave "delete" para eliminar las propiedades de los objetos
// Usa la palabra clave delete para eliminar las claves oranges, plums y strawberries del objeto foods.


// Solucion:

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods)

// Explicacion:
// En este código, delete foods.oranges, delete foods.plums y delete foods.strawberries eliminan las propiedades oranges, plums y strawberries del objeto foods, respectivamente.