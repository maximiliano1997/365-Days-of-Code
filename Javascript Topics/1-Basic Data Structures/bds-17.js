// Ejercicio 17: Evalúa si un objeto tiene una propiedad
// Termina de escribir la función para que devuelva true si el objeto pasado contiene los cuatro nombres, Alan, Jeff, Sarah and Ryan y devuelva false en caso contrario.

// Para comprobar si un objeto tiene ciertas propiedades, puedes usar el operador 'in' o el metodo 'hasOwnProperty()'. Aqui esta como puedes hacerlo utilizando el operador 'in'

/* 
2 opciones tienes aca:
users.hasOwnProperty('Alan');
y
'Alan' in users; 
*/

// Solucion:

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    return 'Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj;
}

console.log(isEveryoneHere(users));

// Explicacion:
// En este Codigo, 'Alan' in userObj && 'Jeff' in userObj && 'Sarah' in userObj && 'Ryan' in userObj comprueba si las propiedades 'Alan','Jeff','Sarah' y 'Ryan' estan en el objeto 'userObj'. Si todas esta propiedades existen, la funcion devielve 'true'; de lo contrario, devuelve 'false'.

// Recuerda que la operacion '&&' (AND logico) solo devuelve 'true' si todas sus condiciones son 'true'. Si al menos uan de ellas es 'false', devuelve 'false'.