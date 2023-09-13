# 7-Escribir un programa que pida al usuario un número entero y muestre por pantalla si es múltiplo de 45.


userInput = int(input('Ingresa un numero entero: '))

if userInput % 45 == 0:
    print(f'{True}, El numero {userInput} es multiplo de 45!')
else:
    print(f'{False}, El numero {userInput} no es multiplo de 45!')
