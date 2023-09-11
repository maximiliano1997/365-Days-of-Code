# 6. Escribe una función que toma un número y calcula su factorial.


def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
        


print(factorial(5))