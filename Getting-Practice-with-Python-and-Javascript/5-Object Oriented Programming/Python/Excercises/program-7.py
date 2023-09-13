# 7. **Clase Animal y sus Subclases**: Define una clase Animal con atributos y métodos comunes a todos los animales, luego crea subclases como Mamífero, Ave, Reptil, etc., que hereden de la clase Animal y agreguen sus propias características y comportamientos.

class Animal:
    def __init__(self, nombre, patas, color, cola):
        self.nombre = nombre
        self.patas = patas
        self.color = color
        self.cola = cola

    def __str__(self):
        return self.nombre

    def comer(self):
        return f'El {self.nombre} esta Comiendo'

    def dormir(self):
        return f'El {self.nombre} esta descansando'

    def moverse(self):
        return f'El {self.nombre} se mueve a toda velocidad'


class Reptil(Animal):
    def __init__(self, nombre, patas, color, cola, dieta):
        super().__init__(nombre, patas, color, cola)
        self.dieta = dieta

    def comer(self):
        return f'El {self.nombre} esta comiendo {self.dieta}'


class Ave(Animal):
    def __init__(self, nombre, patas, color, cola, dieta, alas):
        super().__init__(nombre, patas, color, cola)
        self.dieta = dieta
        self.alas = alas

    def comer(self):
        return f'El {self.nombre} esta comiendo {self.dieta}'

    def volar(self):
        return f'El {self.nombre} sale volando a toda velocidad!'

    def cantar(self):
        return f'El {self.nombre} hace su canto seductor!'


class Mamifero(Animal):
    def __init__(self, nombre, patas, color, cola, dieta):
        super().__init__(nombre, patas, color, cola)
        self.dieta = dieta

    def comer(self):
        return f'El {self.nombre} esta comiendo {self.dieta}!'

    def amamantar(self):
        return f'El {self.nombre} esta amamantando a sus crias!'


# TEST's

# 1
Ave1 = Ave('Condor', 2, 'Blanco', 1, 'Carnivora', 2)
print(Ave1.volar())

# 2
Reptil1 = Reptil('Iguana', 4, 'Verde', 1, 'hervivoro')
print(Reptil1.comer())

# 3
Mamifero1 = Mamifero('Humano', 2, 'Piel', 0, 'carnivoro')
print(Mamifero1.amamantar())
