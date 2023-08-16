// 4 - Imprimir todos los números impares del 1 al 20 usando un loop.

counter = 1;
arr = [];


while (counter <= 20) {
    if (counter % 2 != 0) {
        arr.push(counter)
    }
    counter++;
}

document.write(arr)
console.log(arr)