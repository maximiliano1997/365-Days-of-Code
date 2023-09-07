// 5. **Clase Empleado**: Crea una clase Empleado con atributos para el nombre, la ID del empleado, el salario base, y las horas extra trabajadas. Incluye métodos para calcular el salario con las horas extra, y mostrar la información del empleado.

class Empleado {
    constructor(nombre, idEmpleado, salarioBase, horasExtra) {
        this.nombre = nombre
        this.idEmpleado = idEmpleado
        this.salarioBase = salarioBase
        this.horasExtra = horasExtra
    }

    info() {
        let resultado = `Nombre: ${this.nombre} \n`
        resultado += `ID Empleado: ${this.idEmpleado} \n`
        resultado += `Salario Base: ${this.salarioBase} \n`
        resultado += `Horas Extras: ${this.horasExtra} \n`
        return resultado;
    }

    calcularSalario() {
        let salarioTotal = this.salarioBase;
        if (this.horasExtra > 20) {
            salarioTotal += this.horasExtra * 20
        }
        else if (this.horasExtra > 10) {
            salarioTotal += this.horasExtra * 15
        }
        else {
            salarioTotal += this.horasExtra * 10
        }
        return `Salario Total + horas extra: $${salarioTotal}`;
    }
}



let empleadoOne = new Empleado("Imanol", "001", 4800, 14)
console.log(empleadoOne.info())
console.log(empleadoOne.calcularSalario()) 