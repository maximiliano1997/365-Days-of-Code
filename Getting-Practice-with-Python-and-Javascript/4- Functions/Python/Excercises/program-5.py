# 5.  Escribe una función que tome una lista de números y devuelva la suma de todos los números en la lista.


lista_de_numero = [1997,12,3]


def suma_de_lista(lista):
    resultado = 0
    for c in lista:
        resultado += c;
    return f'El resultado de la suma de la lista {lista} es: {resultado}';

print(suma_de_lista(lista_de_numero))