# 4.  Crea una función que tome una lista de números y devuelva el menor número en la lista.


def menor_numero(list):
    return min(list)


print(menor_numero([1,2,3,4,5,6,7,8]))


# En lugar de imprimir el resultado dentro de la función, sería mejor que la función devuelva el resultado. Esto hace que la función sea más versátil y reutilizable.

#El nombre list es el nombre de una clase integrada en Python. Por lo general, es una buena práctica evitar sobrescribir estos nombres para evitar confusiones. Puedes usar otro nombre, como num_list o simplemente lst.
