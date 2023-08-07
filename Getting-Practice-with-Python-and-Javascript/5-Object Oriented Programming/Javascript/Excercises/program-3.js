// 3. **Clase Libro y Autor**: Define una clase Autor con nombre y fecha de nacimiento, y una clase Libro que tenga título, año de publicación y autor. El autor deberá ser un objeto de la clase Autor.


class Autor {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
}

class Libro {
    constructor(titulo, añoPublicacion, autor) {
        this.titulo = titulo;
        this.añoPublicacion = añoPublicacion;
        this.autor = autor
    }
}

let autor1 = new Autor('Imanol', '12-03-1997')
let libro1 = new Libro('Mi libro lindo', 2019, autor1)


document.write(autor1.nombre + '\n')
document.write(libro1.titulo + '\n')
document.write(libro1.autor.fechaNacimiento + '\n')