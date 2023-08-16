// 4-Escribe un programa que solicite al usuario una cadena de caracteres y luego imprima si esa cadena es un anagrama de otra cadena dada.

const sonAnagramas = (arg1, arg2) => {

    arg1 = arg1.toLowerCase().replace(/\s+/g, "");
    arg2 = arg2.toLowerCase().replace(/\s+/g, "");

    return sortString(arg1) === sortString(arg2);
}

const sortString = str => {
    return str.split('').sort().join('');
}

let userInput = prompt('Ingresa una cadena de caracteres: ');
cadenaDada = "Roma";

if (sonAnagramas(userInput, cadenaDada) == true) {
    console.log(`${true}, La cadena ${userInput} del usuario es un anagrama de la cadena dada: ${cadenaDada}`)
} else {
    console.log(`${false}, La cadena ${userInput} del usuario no es un anagrama de la cadena dada: ${cadenaDada}`)
}



// Explicacion interesante:
/* a Diferencia de Python
JavaScript no tiene una función sort() nativa para cadenas. Deberías convertir la cadena en un arreglo usando split(''), luego ordenar el arreglo con sort(), y finalmente convertirlo de nuevo en una cadena con join('').

Estás usando replace(" ", ""), pero eso solo reemplazará el primer espacio. Si quieres reemplazar todos los espacios, debes usar una expresión regular.

El if en la función sonAnagramas puede ser simplificado devolviendo directamente el resultado de la comparación.
*/