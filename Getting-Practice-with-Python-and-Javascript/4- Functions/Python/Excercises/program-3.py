# 3.  Escribe una función que tome una lista de números y devuelva el mayor número en la lista.


# Solution:  
def majorNum(list):
    counter = 0
    for i in list:
        if counter < i:
            counter = i 
    print(counter)


majorNum([1,2,300,4,50,66])