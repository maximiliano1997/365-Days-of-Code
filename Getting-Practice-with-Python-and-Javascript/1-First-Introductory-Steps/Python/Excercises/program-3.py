# 3-Crea un programa que pida al usuario un número entero y luego imprima todos los números desde 1 hasta ese número, pero reemplaza los múltiplos de 3 con "Fizz", los múltiplos de 5 con "Buzz" y los múltiplos de ambos con "FizzBuzz".




userInput = int(input('Ingresa un numero entero: '))

counter = 0;
for i in range(userInput + 1):
    if (i % 3 == 0) and (i % 5 == 0):
        print('FizzBuzz')
    elif i % 3 == 0:
        print('Fizz')
    elif i % 5 == 0:
        print('Buzz')
    else:
        print(i)