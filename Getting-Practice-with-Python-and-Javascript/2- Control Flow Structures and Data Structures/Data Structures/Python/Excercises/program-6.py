# 6-Crear un conjunto con los números divisibles por 3 del 1 al 10 y mostrar el número de elementos en el conjunto.

conjuntoNumeros = []

for x in range(1,10):
    if x % 3 == 0:
        conjuntoNumeros.append(x)


print(len(conjuntoNumeros))