// 3.  Escribe una función que tome una lista de números y devuelva el mayor número en la lista.


// Solution: 

let majorNum = (list) => {
    let counter = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] > counter) {
            counter = list[i]
        }

    }
    document.write(counter)
}


majorNum([10, 1, 2, 3, 4, 5, 6])