// 4. **Clase Polígono**: Define una clase abstracta Polígono, y clases derivadas como Triángulo, Cuadrado, Rectángulo, etc., que implementen los métodos para calcular el área y el perímetro.



class Poligono {
    constructor() {
        if (new.target === Poligono) {
            throw new TypeError("No puedes instanciar una clase abstracta...")
        }
    }

    area() {
        throw new Error("Debes implementar el metodo area.")
    }

    perimetro() {
        throw new Error("Debes implementar el metodo parimetro.")
    }
}

class Triangulo extends Poligono {
    constructor(base, altura) {
        super();
        this.base = base
        this.altura = altura
    }


    area() {
        return (this.altura * this.base) / 2 + ' area tri.'

    }

    perimetro() {
        return this.base * 3 + ' perimetro tri.'; // Suponiendo triangulo equilatero
    }
}
class Cuadrado extends Poligono {
    constructor(lados) {
        super();
        this.lados = lados
    }

    area() {
        return this.lados ** 2 + ' area cuad.'
    }

    perimetro() {
        return this.lados * 4 + ' perimetro cuad.'

    }
}
class Rectangulo extends Poligono {
    constructor(base, altura) {
        super();
        this.base = base
        this.altura = altura
    }

    area() {
        return this.base * this.altura + ' area rect.'

    }

    perimetro() {
        return (this.base + this.altura) * 2 + ' perimetro rect.'
    }


}

// Prueba de Poligonos

// Triangulo
let tri = new Triangulo(5, 10)

console.log(tri.area())
console.log(tri.perimetro())


// Cuadrado
let poli = new Cuadrado(5)
console.log(poli.area())
console.log(poli.perimetro())

// Rectangulo
let rect = new Rectangulo(20, 10)
console.log(rect.area())
console.log(rect.perimetro())