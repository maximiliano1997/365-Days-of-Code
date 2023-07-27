// 1-Escribir un programa que pida al usuario un número entero y muestre por pantalla si es múltiplo de 41.


// Resolution

let userInput = parseInt(prompt('Ingresa un numero entero: '));

let resultado = userInput / 41

if (resultado == 0) {
    console.log(`${true}, <--- es multiplo de 41`);
} else {
    console.log(`${false}, <--- no es multiplo de 41`);
}


// True y False en Javscript tiene que ser en minuscula true y false...