# 1-Escribir un programa que pida al usuario un número entero y muestre por pantalla si es múltiplo de 41.


userInput = int(input('Ingrese un numero entero: '))

resultado = userInput % 41

if resultado == 0:
    print(True, '<--- Si es m ultiplo de 41')
else:
    print(False, '<--- No es multiplo de 41')