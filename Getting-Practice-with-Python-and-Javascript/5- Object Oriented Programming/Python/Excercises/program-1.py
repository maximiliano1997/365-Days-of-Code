# 1. **Clase Coche**: Define una clase Coche que tenga los atributos marca, modelo, color, número de puertas, y velocidad máxima. Incluye métodos para acelerar, frenar, y obtener la información del coche.


# Resolution:

class Coche:
    def __init__(self, marca, modelo, color, nroPuertas, velocidadMax):
        self.marca = marca
        self.modelo = modelo
        self.color = color 
        self.nroPuertas = nroPuertas
        self.velocidadMax = velocidadMax


    def __str__(self):
        return self.marca
    
    def info(self):
        respuesta = f'Informacion del Choche: \n'
        respuesta += f'Marca: {self.marca} \n'
        respuesta += f'Modelo: {self.modelo} \n'
        respuesta += f'Color: {self.color} \n'
        respuesta += f'Numero de Puertas: {self.nroPuertas} \n'
        respuesta += f'Velocidad Maxima: {self.velocidadMax}km/h \n'
        return respuesta

    def acelerar(self):
        print(
            f'El Coche, {self.marca} modelo {self.modelo} acelera a su velocidad Maxima de {self.velocidadMax} km/h')
        return '\n'

    def frenar(self):
        print(f'El Coche, {self.marca} a frenado!')
        return '\n'


# Prueba/Testeo del modelo Coche

auto1 = Coche('Chevrolet','2012','Amarillo','4','200')
print(auto1) # usa el __Str__

# Usa el metodo de info
print(auto1.info()) 
# Metodo Acelerar
print(auto1.acelerar())
# Metodo Frenar
print(auto1.frenar())


