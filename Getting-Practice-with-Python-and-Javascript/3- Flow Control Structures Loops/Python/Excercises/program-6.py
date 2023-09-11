# 6-Sumar todos los números pares del 1 al 100 usando un loop.


contador = 0;
for c in range(1, 100 + 1):
    if (c % 2 == 0):
        contador += c

print(contador)