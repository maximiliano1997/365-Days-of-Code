// 1. **Clase Coche**: Define una clase Coche que tenga los atributos marca, modelo, color, número de puertas, y velocidad máxima. Incluye métodos para acelerar, frenar, y obtener la información del coche.


// Resolution:

class Coche {
    constructor(marca, modelo, color, nroPuertas, velocidadMax) {
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.nroPuertas = nroPuertas
        this.velocidadMax = velocidadMax
    }

    info() {
        let info = `Informacion del Coche: \n`;
        info += `Marca: ${this.marca} \n`
        info += `Modelo: ${this.modelo} \n`;
        info += `Color: ${this.color} \n`;
        info += `nroPuertas: ${this.nroPuertas} \n`;
        info += `velocidadMax: ${this.velocidadMax} km/h\n`;
        console.log(info)
    }

    acelerar() {
        console.log(`El Coche ${this.marca} acelera a su velocidad Maxima de ${this.velocidadMax} km/h`)
    }

    frenar() {
        console.log(`El Coche ${this.marca} a frenado !`)
    }

}

// Creando el modelo auto usando la clase Coche
let auto1 = new Coche('Ferrari Enzo', '2011', 'Rojo', 2, '290')

// Los metodos siendo llamados
auto1.info()
auto1.acelerar()
auto1.frenar()
