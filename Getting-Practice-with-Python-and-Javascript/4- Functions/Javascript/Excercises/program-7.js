// 7.  Escribe una función que tome un número y devuelva su factorial.


let factorialOf = (num) => {
    let contador = num;
    let lista = [];
    for (let i = 1; i < num; i++) {
        contador *= i; // operacion factorial
        lista.push(i); // lista de numeros que son factorial de num
    }

    console.log(lista);
    return contador;
}

console.log(factorialOf(5))