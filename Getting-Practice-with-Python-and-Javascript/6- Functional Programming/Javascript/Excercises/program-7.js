// 7. Escribe una función que toma una lista de números y retorna la suma de todos los números.

let listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acumulador, valorActual) => acumulador + valorActual, 0);

console.log(listaDeNumeros)

// SIN Functional programming
// const sumaLista = (lista) => {
//     let contador = 0;
//     for (let i = 0; i < lista.length; i++) {
//         contador += lista[i]
//     }
//     return contador;
// }
// console.log(sumaLista(listaDeNumeros));