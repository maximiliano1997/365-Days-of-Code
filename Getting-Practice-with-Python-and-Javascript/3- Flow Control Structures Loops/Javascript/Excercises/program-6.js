// 6-Sumar todos los números pares del 1 al 100 usando un loop.

let counter = 0;

for (let i = 1; i < 100 + 1; i++) {
    if (i % 2 == 0) {
        counter += i
    }
}

console.log(counter)