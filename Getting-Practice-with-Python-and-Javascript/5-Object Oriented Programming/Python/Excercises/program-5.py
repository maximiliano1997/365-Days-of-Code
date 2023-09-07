# 5. **Clase Empleado**: Crea una clase Empleado con atributos para el nombre, la ID del empleado, el salario base, y las horas extra trabajadas. Incluye métodos para calcular el salario con las horas extra, y mostrar la información del empleado.


class Empleado:
    def __init__(self, nombre, idEmpleado, salarioBase, horasExtras):
        self.nombre = nombre
        self.idEmpleado = idEmpleado
        self.salarioBase = salarioBase
        self.horasExtras = horasExtras

    # Metodo para mostrar la informacion del Empleado.
    def __str__(self):
        resultado = f'Nombre: {self.nombre} \n'
        resultado += f'ID Empleado: {self.idEmpleado} \n'
        resultado += f'Salario Base: ${self.salarioBase} \n'
        resultado += f'Horas Extras Trabajadas: {self.horasExtras}hs'
        return resultado 
    
    # Metodo para calcular el salario con las horas extras trabajadas.
    def calcular_salario(self):
        salarioTotal = self.salarioBase;
        if self.horasExtras > 20:
            salarioTotal += self.horasExtras * 20
        elif self.horasExtras > 10:
            salarioTotal += self.horasExtras * 15
        else:
            salarioTotal += self.horasExtras * 10
        return salarioTotal
    






empleado1 = Empleado('Imanol Aguer','01987',4800,14)

print(empleado1)
print(empleado1.calcular_salario())
