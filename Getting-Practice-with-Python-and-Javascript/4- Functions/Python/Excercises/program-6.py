# 6.  Crea una función que tome una lista de números y devuelva el promedio de los números.

lista_numeros = [1,2,3,4,5,6,7,8,9,10,11]

def average(lista):
    resultado = sum(lista) / len(lista)
    print(int(resultado))


average(lista_numeros)