# 3. Escribe una función que filtra una lista de números a solo números impares.


# Solution:

listaNumeros = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60]

def numImpar(n):
    if n % 2 != 0:
        return n
    

pares = filter(numImpar, listaNumeros)
pares = list(pares)

print(pares)


# Aclaracion sobre el metodo filter()
"""
El método `filter()` en JavaScript y la función `filter()` en Python sirven para el mismo propósito: crear una nueva lista o array que contiene solo los elementos que satisfacen una cierta condición. Sin embargo, hay algunas diferencias en cómo se usan y se comportan debido a las diferencias entre los dos lenguajes.

1. **Sintaxis y uso**: En Python, `filter()` es una función que toma dos argumentos: una función y una lista. En JavaScript, `filter()` es un método que se aplica a un array. Toma una función como argumento.

   Python: `filter(función, lista)`
   
   JavaScript: `array.filter(función)`

2. **Tipo de retorno**: En Python, `filter()` devuelve un objeto `filter` que es iterable. Normalmente se convierte en una lista para su uso posterior. En JavaScript, `filter()` devuelve directamente un nuevo array.

3. **Manipulación de la función de callback**: En JavaScript, la función de callback que se pasa a `filter()` puede tomar hasta tres argumentos: el elemento actual, el índice del elemento actual y el array original. En Python, la función que se pasa a `filter()` toma un solo argumento: el elemento actual.

Esas son algunas de las diferencias clave. Ambos son muy útiles para la programación funcional y se utilizan ampliamente en la manipulación de datos.
"""