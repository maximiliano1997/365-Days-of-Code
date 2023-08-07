# 3-Crear un conjunto con los nombres de tres novelas y mostrar si "1984" está en el conjunto.


conjunto = set([
    'Cien años de Soledad',
    'El Codigo Da Vinci',
    '1984'
])


#Forma 1
print('1984' in conjunto)

#Forma 2
# for i in conjunto:
#     if i == '1984':
#         print(True)
#     else:
#         print(False)