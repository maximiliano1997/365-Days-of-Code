// 3. Escribe una función que filtra una lista de números a solo números impares.



listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let newList = []

listaNumeros.filter((num) => {

    if (num % 2 != 0) {
        newList.push(num)
    }
})

document.write(newList)
console.log(newList)