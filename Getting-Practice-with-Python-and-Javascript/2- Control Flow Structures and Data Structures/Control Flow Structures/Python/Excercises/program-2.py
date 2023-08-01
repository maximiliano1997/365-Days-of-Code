# 2-Escribir un programa que pida al usuario una cadena de caracteres y muestre por pantalla si contiene la letra "q".



# Solucion:

userInput = input('Ingrese una cadena de caracteres: ')
letter = 'q'


if letter in userInput:
      print(f"{True}, 'La cadena ingresada por el usuario si contiene' 'q'")

else: 
    print(f"{False}, 'La cadena ingresada por el usuario no contiene' 'q'")


# EXPLAINED: 
'''
# Solicita al usuario que ingrese una cadena de caracteres.
# La función 'input' muestra en la consola el mensaje que se le pasa como argumento ('Ingrese una cadena de caracteres: ')
# y luego espera a que el usuario escriba algo y presione enter. Lo que el usuario escriba se guardará en la variable 'userInput'.
userInput = input('Ingrese una cadena de caracteres: ')

# Define la letra que estás buscando y la almacena en la variable 'letter'.
# En este caso, estás buscando la letra 'q'.
letter = 'q'

# Verifica si la letra que definiste está en la cadena que el usuario ingresó.
# El operador 'in' en Python verifica si una cadena se encuentra dentro de otra cadena. 
# Si la letra 'q' se encuentra en 'userInput', entonces 'letter in userInput' será True.
# Si 'q' no se encuentra en 'userInput', entonces 'letter in userInput' será False.
if letter in userInput:
    # Si 'letter in userInput' es True (es decir, si la letra 'q' se encuentra en 'userInput'), imprime True.
    print(True)
else:
    # Si 'letter in userInput' es False (es decir, si la letra 'q' no se encuentra en 'userInput'), imprime False.
    print(False)

'''