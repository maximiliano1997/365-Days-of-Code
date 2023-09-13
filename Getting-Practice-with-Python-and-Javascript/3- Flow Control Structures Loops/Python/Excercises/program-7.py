# 7-Sumar todos los números impares del 1 al 100 usando un loop.

contador = 0

for c in range(1, 100):
    if c % 2 != 0:
        contador += c

print(contador)
