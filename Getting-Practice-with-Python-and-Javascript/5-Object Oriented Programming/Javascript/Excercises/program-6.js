// 6. **Clase Cuenta Bancaria**: Crea una clase CuentaBancaria con atributos para el titular, el saldo, y el tipo de cuenta. Incluye métodos para depositar, retirar, y obtener la información de la cuenta.


class CuentaBancaria {
    constructor(titular, saldo, tipoCuenta) {
        this.titular = titular
        this.saldo = saldo
        this.tipoCuenta = tipoCuenta
    }

    verInfo() {
        let resultado = `Informacion de la cuenta: \n`
        resultado += `Titular: ${this.titular} \n`
        resultado += `Saldo: $${this.saldo} \n`
        resultado += `Tipo de Cuenta: ${this.tipoCuenta} \n`
        return resultado;
    }

    depositar() {
        console.log(`Saldo actual en su Cuenta... ${this.saldo}`)
        let deposito = parseFloat(prompt('Ingrese el monto a depositar: '))
        if (deposito > 0 && !isNaN(deposito)) {
            this.saldo += deposito
            return `Usted ah depositado Exitosamente $${deposito}, en su cuenta Bancaria!`
        } else {
            return `El monto a depositar debe ser Positivo.`
        }
    }

    retirar() {
        console.log(`Saldo disponible en su cuenta: $${this.saldo}`)
        let retiro = parseFloat(prompt('Ingrese un monto a retirar: '))
        if (this.saldo >= retiro && !isNaN(retiro)) {
            this.saldo -= retiro
            return `Usted ah retirado con exito $${retiro} de su cuenta Bancaria!`;
        } else {
            return `Saldo insuficiente...`;
        }
    }
}

let cliente1 = new CuentaBancaria('Imanol Aguer', 66485, 'Caja De Ahorro')


// Ver info de la Cuenta
console.log(cliente1.verInfo())


// Depositar
console.log(cliente1.depositar())
console.log(cliente1.verInfo())

// Retirar
console.log(cliente1.retirar())
console.log(cliente1.verInfo())