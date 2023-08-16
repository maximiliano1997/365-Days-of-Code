# 4-Crear un diccionario con los nombres de tres planetas y sus respectivos números de lunas. Mostrar el número de lunas del primer planeta en el diccionario.
print("""
      1-Jupiter \n
      2-Saturno \n
      3-Urano \n
      """)

extra = int(input('Seleccione el Numero de planeta:'))

tres_planetas = {
    "Jupiter": 'El planeta Jupiter tiene 79 Lunas',   
    "Saturno": 'El planeta Saturno tiene 83 Lunas',
    "Urano": 'El planeta Urano tiene 27 Lunas'
}

# print(tres_planetas['Saturno'])

if extra == 1:
    print(tres_planetas['Jupiter'])
elif extra == 2:
    print(tres_planetas['Saturno'])
elif extra == 3:
    print(tres_planetas['Urano'])
else:
    print(f'{extra} no es un NUMERO valido...')