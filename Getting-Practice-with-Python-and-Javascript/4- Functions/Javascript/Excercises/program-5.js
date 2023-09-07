// 5.  Escribe una función que tome una lista de números y devuelva la suma de todos los números en la lista.


let listaDeNumeros = [1997, 12, 3]



function sumaDeLista(lista) {
    let start = 0;
    let end = lista.length
    let resultado = 0;
    for (let i = start; i < end; i++) {
        resultado += lista[i];
    }
    console.log("Todo perfecto!")
    return resultado;
}

console.log(sumaDeLista(listaDeNumeros))