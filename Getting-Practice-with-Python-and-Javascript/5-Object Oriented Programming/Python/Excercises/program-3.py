# 3. ** Clase Libro y Autor**: Define una clase Autor con nombre y fecha de nacimiento, y una clase Libro que tenga título, año de publicación y autor. El autor deberá ser un objeto de la clase Autor.


# Solution:

class Autor:
    def __init__(self, nombre, fechaNacimiento):
        self.nombre = nombre
        self.fechaNacimiento = fechaNacimiento

class Libro():
    def __init__(self, titulo, añoPublicacion, autor):
        self.titulo = titulo
        self.añoPublicacion = añoPublicacion
        self.autor = autor


# Objeto de la clase Autor
autorNumeroUno = Autor('Gabriel Garcia Marquez', '1927-03-06')

# Objeto de la clase Libro
libroNumeroUno = Libro('Cien años de soledad', 1967, autorNumeroUno)



print(libroNumeroUno.titulo)
print(autorNumeroUno.nombre)