// 2. ** Clase Estudiante **: Crea una clase Estudiante con atributos para el nombre, número de matrícula, y calificaciones(una lista).Incluye métodos para agregar calificaciones, calcular el promedio, y mostrar la información del estudiante.


// Solucion: adventJS

class Estudiante {
    constructor(nombre, nroMatricula, calificaciones) {
        this.nombre = nombre;
        this.nroMatricula = nroMatricula;
        this.calificaciones = calificaciones;
    };

    verInfo() {
        let result = '\n Informacion del Estudiante: \n'
        result += `Nombre: ${this.nombre} \n`
        result += `Nro Matricula: ${this.nroMatricula} \n`
        result += `Calificaciones: ${this.calificaciones} \n`
        console.log(result);
    }

    agregarCalificaciones() {
        for (let i = 1; i < 12; i++) {
            let calif = parseInt(prompt(`Agrega Calificacion N°${i}`))
            this.calificaciones.push(calif)
        }
        console.log('Calificaciones Agregadas! \n')
    }

    calcularPromedio() {
        let suma = this.calificaciones.reduce((a, b) => a + b, 0)
        let promedio = suma / this.calificaciones.length
        console.log(`El promedio de calificaciones es: ${promedio}`)
    }
}

let ricardo = new Estudiante('Ricardo', 1997, []);

ricardo.verInfo();

ricardo.agregarCalificaciones();

ricardo.verInfo();

ricardo.calcularPromedio()

// Tu intención de definir una clase en JavaScript con un método es correcta, pero hay un pequeño error en la sintaxis. En JavaScript, los métodos de clase no deben precederse con la palabra clave function. Aquí está tu código con la corrección:


// El método calcularPromedio hace uso de la función reduce de JavaScript para sumar todas las calificaciones en el array this.calificaciones. Luego, divide esa suma por la longitud del array para obtener el promedio. Este resultado se muestra en la consola con console.log.
// En JavaScript, no existe la función sum como tal, la cual podría utilizarse para sumar todos los elementos de un array. Para ello, en su lugar se suele utilizar el método reduce de los arrays, que permite aplicar una función a todos los elementos del array.