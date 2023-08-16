// 4.  Crea una función que tome una lista de números y devuelva el menor número en la lista.


let numeroMenor = (list) => {
    return Math.min(...list)
}


console.log(numeroMenor([11, 5, 99, 658, 320]))




// Explicacion;
/*
El operador ... (spread operator) se utiliza para "descomponer" el arreglo en argumentos individuales, ya que Math.min espera argumentos separados por comas y no un arreglo.
*/