# 6-Crea un programa que pida al usuario una cantidad en grados Celsius y la convierta a grados Rankine. La fórmula para convertir de Celsius a Rankine es: R = (C + 273.15) * 9/5.


try:
    userInput = float(input('Ingresa un numero en grados Celsius: '))
    Celsius = userInput
    rankine = (Celsius + 273.15) * 9/5
    print(f'La temperatura {Celsius}° Celsius a Rankine es {float(rankine)}')
except:
    print('Por favor, ingresa un numero valido. ')
