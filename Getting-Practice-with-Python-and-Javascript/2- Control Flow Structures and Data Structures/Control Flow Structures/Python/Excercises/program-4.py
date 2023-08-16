# 4-Escribir un programa que pida al usuario un número entero y muestre por pantalla si es múltiplo de 43.


userInput = int(input(' Ingresa un numero entero: '))

if userInput % 43 == 0:
    print(True)
    print(f'El numero {userInput} es multiplo de 43')
else: 
    print(False)
    print(f'El numero {userInput} no es multiplo de 43')


