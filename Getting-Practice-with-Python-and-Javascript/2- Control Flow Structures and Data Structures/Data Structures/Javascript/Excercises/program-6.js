// 6-Crear un conjunto con los números divisibles por 3 del 1 al 10 y mostrar el número de elementos en el conjunto.

let conjuntoNumeros = [];

for (let i = 1; i < 10; i++) {
    if (i % 3 == 0) {
        conjuntoNumeros.push(i)
    }
}

console.log(conjuntoNumeros)