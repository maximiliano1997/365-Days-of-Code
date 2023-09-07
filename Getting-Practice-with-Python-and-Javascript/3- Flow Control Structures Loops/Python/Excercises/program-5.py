# 5-Sumar todos los números del 1 al 100 usando un loop.

primerNumero = 1;
ultimoNumero = 100;
num = 0;

for c in range(primerNumero, ultimoNumero + 1):
    num += c;

print(num)