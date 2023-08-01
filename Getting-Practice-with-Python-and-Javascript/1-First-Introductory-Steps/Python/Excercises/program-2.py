# 2-Crea un programa que pida al usuario una cadena de caracteres y luego imprima esa cadena con todas las vocales reemplazadas por asteriscos.



userInput = input('Ingresa una cadena de caracteres: ')

result = ''

vocales = 'aeiouAEIOU'
# sep = vocales.split('')
for i in userInput:
    if i in vocales:
        result += '*'
    else: result += i

print(result)


# EXPLAINED:
'''
# Primero se le pide al usuario que ingrese una cadena de caracteres.
# La función input muestra el mensaje entre paréntesis y luego captura lo que el usuario escribe.
userInput = input('Ingresa una cadena de caracteres: ')

# Se crea una cadena vacía y se almacena en la variable 'result'.
# Esta variable se utilizará para construir la cadena de salida con las vocales reemplazadas.
result = ''

# Se define una cadena de caracteres con todas las vocales, en minúscula y mayúscula, y se guarda en la variable 'vocales'.
vocales = 'aeiouAEIOU'

# Inicia un bucle for que recorre cada carácter en la cadena ingresada por el usuario (userInput).
for i in userInput:
    # Dentro del bucle, se verifica si el carácter actual (i) se encuentra en la cadena de vocales.
    if i in vocales:
        # Si el carácter es una vocal, se añade un asterisco (*) a la cadena result.
        result += '*'
    else:
        # Si el carácter no es una vocal, se añade tal cual a la cadena result.
        result += i

# Una vez que el bucle ha recorrido todos los caracteres de la cadena userInput, se imprime la cadena result.
# Esta cadena es la cadena original ingresada por el usuario, pero con todas las vocales reemplazadas por asteriscos.
print(result)
'''




