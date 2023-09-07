// 5. Escribe una función que toma una lista de cadenas y concatena todas las cadenas.


let listaDeCadenas = ["hola ", "Santiago ", "estas ", "re ", "lindo"];

const concatenarCadenas = (lista) => {
    return lista.join('')
}

console.log(concatenarCadenas(listaDeCadenas))