# 6. **Clase Cuenta Bancaria**: Crea una clase CuentaBancaria con atributos para el titular, el saldo, y el tipo de cuenta. Incluye métodos para depositar, retirar, y obtener la información de la cuenta.

class CuentaBancaria:
    def __init__(self, titular, saldo, tipoCuenta):
        self.titular = titular
        self.saldo = saldo
        self.tipoCuenta = tipoCuenta

    def __str__(self):
        resultado = f'Informacion de la Cuenta: \n'
        resultado += f'Titular: {self.titular} \n'
        resultado += f'Saldo: {self.saldo} \n'
        resultado += f'Tipo de Cuenta: {self.tipoCuenta} \n'
        return resultado

    def depositar(self):
        print(f'Saldo actual en su cuenta: ... {self.saldo}')
        deposito = float(input('Ingrese el monto a depositar: '))
        if deposito > 0:
            self.saldo += deposito
            print(
                f'Usted ah depositado excitosamente ${deposito} a su cuenta bancaria.')
        else:
            print(
                f'El monto a depositar debe ser positivo.')

    def retirar(self):
        print(f'Saldo disponible para retirar ...{self.saldo}')
        retiro = float(input('Ingrese el monto a retirar de la ucenta: '))
        if self.saldo >= retiro:
            self.saldo -= retiro
            print(
                f'Usted ah retirado excitosamente ${retiro} de su cuenta bancaria.')
        else:
            print(
                f'Saldo insuficiente... el monto a retirar supera el saldo disponible en su cuenta')


# TEST
cliente1 = CuentaBancaria('Imanol', 66485, 'Caja de Ahorro')

# ver informacion de la cuenta
print(cliente1)

# depositar
cliente1.depositar()
print(cliente1)

# retirar
cliente1.retirar()
print(cliente1)
