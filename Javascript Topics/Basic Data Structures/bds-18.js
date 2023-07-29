/*
Ejercicio 18: Itera a través de las claves de un objeto con una sentencia "for...in".

We've defined a function countOnline which accepts one argument, allUsers. Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true. An example of an object which could be passed to countOnline is shown below. Each user will have an online property set to either true or false.

Para resolver este ejercicio, debes utilizar un bucle for...in para iterar sobre todas las propiedades (en este caso, usuarios) del objeto allUsers. Luego, puedes acceder a la propiedad online de cada usuario y aumentar un contador si el usuario está online.

*/


// Solucion: 

const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: true
    }
}


function countOnline(allUsers) {
    let count = 0;
    for (let user in allUsers) {
        if (allUsers[user].online) {
            count++;
        }
    }
    return count;
}

console.log(countOnline(users));


// Explicacion:
/*
En este código, la variable count lleva la cuenta de cuántos usuarios están online. Se inicializa a 0 y se incrementa en 1 cada vez que se encuentra un usuario cuya propiedad online es true. Al final de la función, se devuelve el valor de count.
*/