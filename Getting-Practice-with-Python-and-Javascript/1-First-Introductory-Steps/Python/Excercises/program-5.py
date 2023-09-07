# 5-Escribe un programa que solicite al usuario un número entero y luego imprima todos los factores primos de ese número.


def es_primo(num):
    if num < 2:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    return True

def factores_primos(n):
    factores = []
    for i in range(2, n + 1):
        while es_primo(i) and n % i == 0:
            factores.append(i)
            n /= i
    return factores


userInput = int(input('Ingresa un numero entero: '))
print(f"Los facotres primos de {userInput} son: {factores_primos(userInput)}")

# print(2 ** 0.5)