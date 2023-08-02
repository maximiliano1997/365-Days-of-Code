# 2. ** Clase Estudiante**: Crea una clase Estudiante con atributos para el nombre, número de matrícula, y calificaciones(una lista). Incluye métodos para agregar calificaciones, calcular el promedio, y mostrar la información del estudiante.

# Solucion:
class Estudiante():
    def __init__(self, nombre, nroMatricula, calificaciones):
        self.nombre = nombre
        self.nroMatricula = nroMatricula
        self.calificaciones = calificaciones

    def __str__(self):
        result = 'Informacion del Estudiante: \n'
        result += f'Nombre: {self.nombre}, \n'
        result += f'Matricula: {self.nroMatricula}, \n'
        result += f'Calificaciones: {self.calificaciones} \n'
        return result


    def agregar_calificacion(self):
        print('Ingresa 12 calificaciones: 1 x Mes')
        for i in range(0, 10):
            calif = int(input('Ingresa calificacion: '))
            self.calificaciones.append(calif)
        print('Calificaciones agregadas! \n')
    
    def calcular_promedio(self):
        print(sum(self.calificaciones) / len(self.calificaciones))


    # def mostrar_info_estudiante(self):  # __str__ ya cumple esa funcion

# TEST SOLUCION:

one = Estudiante('Ricardo', '1997', [])

print(one)

one.agregar_calificacion()

print(one)

one.calcular_promedio()
