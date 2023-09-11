# 6-Escribir un programa que pida al usuario un número entero y muestre por pantalla si es múltiplo de 44.


userInput = int(input('Ingresa un numero entero: '))

if userInput % 44 == 0:
    print(f'{True}, El numero {userInput} es multiplo de 44')
else:
    print(f'{False}, El numero {userInput} no es multiplo de 44')
