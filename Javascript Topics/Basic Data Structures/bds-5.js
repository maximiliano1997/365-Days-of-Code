// En este ejercicio, se te pide que modifiques la función htmlColorNames para que elimine los dos primeros elementos del array arr y los reemplace por 'DarkSalmon' y 'BlanchedAlmond' usando splice().



// Resolution:

function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
}


console.log(htmlColorNames(
    ['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']))
