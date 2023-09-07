# 5-Escribir un programa que pida al usuario una cadena de caracteres y muestre por pantalla si contiene la letra "r".


userInput = input("Ingresa una cadena de caracters: ")

if "r" in userInput:
    print(f'{True}, La cadena ({userInput}) si contiene la laetra "r"');
else:
    print(f'{False}, La cadena ({userInput}) no contiene la laetra "r"');