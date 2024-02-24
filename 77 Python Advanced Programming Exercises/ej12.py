'''
12. Consider the palindromic numbers. A palindromic or symmetric
number is a number that does not change when you write its digits in
reverse order.
Some examples of palindromic numbers:
• 363
• 2882
• 29492
A function called is_palindrome() is implemented that checks if the
number is palindromic in decimal and binary notation.

Implement a function called calculate() that returns all three-digit palindromic numbers in both decimal and binary notation. In response, call calculate() function and print the result to the console.

Expected result:
[313, 585, 717]
'''


# Solution:
def is_palindrome(number):
    if str(number) != str(number)[::-1]:
        return False

    numero_binario = bin(number)[2:]
    return numero_binario == numero_binario[::-1]


def calculate():
    lista = []
    # rango = 1000
    for i in range(1000):
        if is_palindrome(i):
            if i > 99 and i < 1000:
                lista.append(i)
    return lista


print(calculate())
