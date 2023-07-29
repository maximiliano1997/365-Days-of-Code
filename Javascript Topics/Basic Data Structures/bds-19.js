// Ejercicio 19:  Genera un arreglo de todas las claves de los objetos con Object.keys(). Termina de escribir la función getArrayOfUsers para que devuelva un arreglo que contenga todas las propiedades del objeto que recibe como argumento.

/*
a obtener un array que contenga todas las propiedades (o claves) de un objeto, puedes usar el método Object.keys().
*/


// Solucion:

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users));

// Explicacion:
// En este código, Object.keys(obj) devuelve un array que contiene las claves del objeto obj. En este caso, esas claves son 'Alan', 'Jeff', 'Sarah', y 'Ryan', que son los nombres de los usuarios en el objeto users.