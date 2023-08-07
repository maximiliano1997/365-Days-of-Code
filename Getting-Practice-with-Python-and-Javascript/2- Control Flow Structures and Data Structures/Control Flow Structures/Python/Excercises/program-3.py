# 3-Escribir un programa que pida al usuario un número entero y muestre por pantalla si es múltiplo de 42.


userInput = int(input('Ingresa un numero entero: '))

if userInput % 42 == 0:
    print(True)
    print(f'El numero {userInput } es multiplo de 42. ')
else:
    print(False)
    print(f'El numero {userInput } no es multiplo de 42. ')
