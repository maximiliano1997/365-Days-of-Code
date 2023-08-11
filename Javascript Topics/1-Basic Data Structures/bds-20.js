// Ejercicio 20: Modifica un arreglo almacenado en un objeto.
/*
Echa un vistazo al objeto que hemos proporcionado en el editor de código. El objeto user contiene tres claves. La clave data contiene cinco claves, una de las cuales contiene un arreglo de friends. A partir de esto, puedes ver lo flexibles que son los objetos como estructuras de datos. Hemos empezado a escribir una función addFriend. Termina de escribirla para que tome un objeto user y agregue el nombre del argumento friend al arreglo almacenado en user.data.friends y devuelva ese arreglo.

Para agregar un nuevo amigo al array friends en el objeto user, puedes utilizar el método push() del array. Aquí está cómo puedes hacerlo:
*/

// Solucion:

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            cuontry: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));


// Explicacion:
/* 
En este código, userObj.data.friends.push(friend); agrega el nuevo amigo al final del array friends en el objeto user. Luego, la función devuelve el array friends actualizado.
*/