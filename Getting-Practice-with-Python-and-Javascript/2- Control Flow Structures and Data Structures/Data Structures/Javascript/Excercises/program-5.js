


// 5-Crear un conjunto con los números del 10 al 1 y mostrar el número más grande en el conjunto.

let conjunto = [8, 5, 2, 9, 6, 3, 7, 4, 1, 10]
let biggerN = 0;

for (let i = 0; i < conjunto.length; i++) {
    if (conjunto[i] > biggerN) {
        biggerN = conjunto[i];
    }
}
console.log(biggerN)