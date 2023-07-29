// Ejercicio 14: Modifica un objeto anidado dentro de un objeto
// Aquí hemos definido un objeto userActivity, que incluye otro objeto anidado dentro de él. Establece el valor de la clave online en 45.


// Solucion:
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
}


userActivity.data.online = 45

console.log(userActivity)

// Explicacion:
// En este código, userActivity.data.online = 45; accede a la propiedad online en el objeto data que está anidado dentro del objeto userActivity, y luego le asigna el valor 45.

//EFSET y IELTS para ingles