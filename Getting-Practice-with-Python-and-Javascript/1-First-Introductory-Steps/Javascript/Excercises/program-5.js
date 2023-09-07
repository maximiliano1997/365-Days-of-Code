//   5-Escribe un programa que solicite al usuario un número entero y luego imprima todos los factores primos de ese número.


function esPrimo(num) {
    if (num < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function factoresPrimos(n) {
    let factores = [];
    for (let i = 2; i <= n; i++) {
        while (esPrimo(i) && n % i === 0) {
            factores.push(i);
            n /= i;
        }
    }
    return factores;
}

let userInput = prompt('Ingresa un numero entero: ');
let numero = parseInt(userInput);

console.log(`Los facotres primos de ${numero} son: ${factoresPrimos(numero)}`)