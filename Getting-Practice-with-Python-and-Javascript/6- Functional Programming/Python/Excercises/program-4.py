# 4. Escribe una función que toma una lista de números y retorna el producto de todos los números.

from functools import reduce

lista = [2,5,10]

# opc 1
print(reduce(lambda x,y: x * y, lista))

# opc 2
def producto_total(list):
    return reduce(lambda x,y: x * y, list)
print(producto_total(lista))


