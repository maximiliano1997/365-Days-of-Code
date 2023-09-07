# 5-Crear un conjunto con los números del 10 al 1 y mostrar el número más grande en el conjunto.


conjunto = [10,9,8,7,6,5,4,3,2,1]

biggerN = 0;

for c in conjunto:
    if c > biggerN:
        biggerN = c;
print(biggerN)