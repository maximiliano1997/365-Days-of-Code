// 7-Sumar todos los números impares del 1 al 100 usando un loop.

let contador = 0;


for (let i = 1; i < 100; i++) {
    if (i % 2 != 0) {
        contador += i;
    }
}

console.log(contador)