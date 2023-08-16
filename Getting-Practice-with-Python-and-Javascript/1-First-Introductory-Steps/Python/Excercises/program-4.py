# 4-Escribe un programa que solicite al usuario una cadena de caracteres y luego imprima si esa cadena es un anagrama de otra cadena dada.

def son_anagramas(arg1, arg2):

    arg1 =  arg1.lower().replace(" ","")
    arg2 =  arg2.lower().replace(" ","")

    return sorted(arg1) == sorted(arg2)

userInput = input('Ingresa una cadena de caracters: ')
cadena_dada = "Roma"

if son_anagramas(userInput, cadena_dada):
    print(f'{True}, La cadena {userInput} es un anagrama de la cadena dada: {cadena_dada}')
else:
    print(f'{False},La cadena {userInput} no es un anagrama de la cadena dada: {cadena_dada}')
