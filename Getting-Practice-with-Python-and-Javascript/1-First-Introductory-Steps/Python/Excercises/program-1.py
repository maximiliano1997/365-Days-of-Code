# 1-Escribe un programa que solicite al usuario dos números y luego imprima la distancia Manhattan entre esos dos puntos en un sistema de coordenadas 1D. La fórmula para la distancia Manhattan en 1D es: d = |x2 - x1|.

# Resolution:
userInput = [
    int(input('Ingresa primer numero: ')), 
    int(input('Ingresa segundo numero: '))]

resultado = abs(userInput[1] - userInput[0])

print(f'El resultado es: {resultado}')


#Fixed: abs() <-----