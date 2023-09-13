# 7-Crea un programa que pida al usuario una cadena de caracteres y luego imprima el número de palabras en esa cadena que tienen más de 5 letras.


userInput = input('Ingrese una cadena de caracters: ')

lista = userInput.split(' ')
contador = 0
for c in lista:
    if len(c) > 5:
        contador += 1


print(contador)
