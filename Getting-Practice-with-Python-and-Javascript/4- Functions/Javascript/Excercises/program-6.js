// 6.  Crea una función que tome una lista de números y devuelva el promedio de los números.


let lista_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const average = (lista) => {
    const sum = lista.reduce((total, currentValue) => total + currentValue, 0)
    let resultado = sum / lista.length
    console.log(parseInt(resultado))
}


average(lista_numeros)