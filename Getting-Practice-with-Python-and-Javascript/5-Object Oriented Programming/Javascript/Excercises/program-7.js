// 7. ** Clase Animal y sus Subclases **: Define una clase Animal con atributos y métodos comunes a todos los animales, luego crea subclases como Mamífero, Ave, Reptil, etc., que hereden de la clase Animal y agreguen sus propias características y comportamientos.


class Animal {
    constructor(nombre, patas, color, cola) {
        this.nombre = nombre;
        this.patas = patas;
        this.color = color;
        this.cola = cola;
    }

    verInfo() {
        let resultado = `Informacion del Animal: `
        resultado += `Nombre: ${this.nombre}`
        resultado += `Patas: ${this.patas}`
        resultado += `Color: ${this.color}`
        resultado += `Cola: ${this.cola}`
        return resultado;
    }

    comer() {
        return `El ${this.nombre} esta comiendo!`;
    }

    dormir() {
        return `El ${this.nombre} esta durmiendo!`;
    }

    moverse() {
        return `El ${this.nombre} se mueve a toda velocidad`;
    }
}

class Reptil extends Animal {
    constructor(nombre, patas, color, cola, dieta) {
        super(nombre, patas, color, cola);
        this.dieta = dieta;
    }

    comer() {
        return `El ${this.nombre} esta comiendo su tipica dieta ${this.dieta}`
    }
}

class Ave extends Animal {
    constructor(nombre, patas, color, cola, dieta, alas) {
        super(nombre, patas, color, cola)
        this.dieta = dieta
        this.alas = alas
    }

    comer() {
        return `El ${this.nombre} esta comiendo su tipica dieta ${this.dieta}!`
    }

    volar() {
        return `El ${this.nombre} sale volando a toda velocidad con sus ${this.alas} Alas! `
    }

    cantar() {
        return `El ${this.nombre} hace su canto seductor!!`
    }
}

class Mamifero extends Animal {
    constructor(nombre, patas, color, cola, dieta) {
        super(nombre, patas, color, cola)
        this.dieta = dieta
    }

    comer() {
        return `El ${this.nombre} esta comiendo su dieta ${this.dieta}`
    }

    amamantar() {
        return `El ${this.nombre} esta amamantando a sus Crias!!`
    }
}



// TESTS

// 1
let ave1 = new Ave('Condor', 2, 'Blanco', 1, 'Carnivora', 2)
console.log(ave1.volar())

// 2
let reptil1 = new Reptil('Iguana', 4, 'Verde', 1, 'hervivoro')
console.log(reptil1.comer())

// 3
let mamifero1 = new Mamifero('Humano', 2, 'Piel', 0, 'carnivoro')
console.log(mamifero1.amamantar())