// 2 - Escribir un programa que pida al usuario una cadena de caracteres y muestre por pantalla si contiene la letra "q".




// Solucion:
let userInput = prompt('Ingrese una cadena de caracters: ')
let letter = 'q';

if (userInput.includes(letter)) {
    console.log(`${true}, La cadena ingresada por el usuario si contiene' 'q'`)
} else {
    console.log(`${false}, La cadena ingresada por el usuario no contiene' 'q'`)
}


// Explained:
/*
// Solicita al usuario que ingrese una cadena de caracteres.
// La función 'prompt' muestra un cuadro de diálogo en la ventana del navegador con el mensaje que se le pasa como argumento ('Ingrese una cadena de caracteres: ')
// y luego espera a que el usuario escriba algo y haga clic en OK. Lo que el usuario escriba se guardará en la variable 'userInput'.
let userInput = prompt('Ingrese una cadena de caracteres: ');

// Define la letra que estás buscando y la almacena en la variable 'letter'.
// En este caso, estás buscando la letra 'q'.
let letter = 'q';

// Verifica si la letra que definiste está en la cadena que el usuario ingresó.
// El método 'includes' en JavaScript verifica si una cadena se encuentra dentro de otra cadena.
// Si la letra 'q' se encuentra en 'userInput', entonces 'userInput.includes(letter)' será true.
// Si 'q' no se encuentra en 'userInput', entonces 'userInput.includes(letter)' será false.
if (userInput.includes(letter)) {
    // Si 'userInput.includes(letter)' es true (es decir, si la letra 'q' se encuentra en 'userInput'), imprime que la cadena contiene 'q'.
    console.log(`${true}, La cadena ingresada por el usuario si contiene 'q'`);
} else {
    // Si 'userInput.includes(letter)' es false (es decir, si la letra 'q' no se encuentra en 'userInput'), imprime que la cadena no contiene 'q'.
    console.log(`${false}, La cadena ingresada por el usuario no contiene 'q'`);
}
*/