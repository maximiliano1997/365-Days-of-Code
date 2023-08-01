# 2. Escribe una función que toma una lista y devuelve una nueva lista con todos los elementos duplicados.


def repeater(arg):
    nuevaLista = []
    for i in arg:
        nuevaLista += [i] * 2
    print(nuevaLista)


repeater([1,2,3,4,5])


# Explicacion:
'''
Si lo que quieres es repetir dos elementos individualmente dentro de una lista, también puedes hacerlo con el operador *. Aquí te muestro un ejemplo con los elementos 1 y 2:

elemento1 = 1
elemento2 = 2
elementos_repetidos = [elemento1] * 3 + [elemento2] * 3
print(elementos_repetidos)

'''