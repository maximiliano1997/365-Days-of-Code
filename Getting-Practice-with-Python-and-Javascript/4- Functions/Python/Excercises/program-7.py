# 7.  Escribe una función que tome un número y devuelva su factorial.


def factorialOf(num):
    listaFactorial = []
    contador = num
    for c in range(1, num):
        # lista de numeros que seran parte de la factorial de num
        listaFactorial.append(c)
        # operacion para conseguir factorial de num
        contador *= c
    print(listaFactorial)
    return contador


print(factorialOf(5))
