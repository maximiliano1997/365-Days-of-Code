// 2 - Crea un programa que pida al usuario una cadena de caracteres y luego imprima esa cadena con todas las vocales reemplazadas por asteriscos.


let userInput = prompt('Ingresa una cadena de caracteres: ')
let vocales = 'aeiouAEIOU';
let result = ''


for (let i = 0; i < userInput.length; i++) {
    if (vocales.includes(userInput[i])) {
        result += '*'
    } else {
        result += userInput[i]
    }
}


console.log(result)



// EXPLAINED:
//  usaste includes()
/*
// Se le pide al usuario que ingrese una cadena de caracteres. El valor ingresado se guarda en la variable userInput.
let userInput = prompt('Ingresa una cadena de caracteres: ');

// Se define una cadena de caracteres con todas las vocales, tanto en minúscula como en mayúscula, y se guarda en la variable vocales.
let vocales = 'aeiouAEIOU';

// Se crea una cadena vacía y se guarda en la variable result. Esta cadena se usará para guardar el resultado.
let result = '';

// Se inicia un bucle for que recorre cada carácter en la cadena userInput.
for (let i = 0; i < userInput.length; i++) {

    // En cada iteración del bucle, se comprueba si el carácter actual está en la cadena vocales usando el método includes(). Si es así, se añade un asterisco a la cadena result.
    if (vocales.includes(userInput[i])) {
        result += '*';
    }

    // Si el carácter actual no es una vocal, se añade tal cual a la cadena result.
    else {
        result += userInput[i];
    }
}

// Después de que el bucle ha recorrido toda la cadena userInput, se imprime la cadena result, que contiene la cadena original con todas las vocales reemplazadas por asteriscos.
console.log(result);
*/