'''
Consider the palindromic numbers. A palindromic or symmetric number is a number that does not change when you write its digits in reverse order

Some examples of palindromic numbers:
366,2882,19492

Implement a function called is_palindrome() that checks if the passed number is laindromic decimal and binary.
For example, the number 99 is a palindromic number nad its binary notation 1100011 is also a palindrome. When these conditions are met, the function returns True, otherwise False.
Example: [IN]: is_palindrome(99) | [OUT]: True
 You just need to implement the function. The tests run several test cases to validate the solution.
'''


# Solution

def is_palindrome(number):
    # Verifica si el numero en notacion decimal es un palindromo
    if str(number) != str(number)[::-1]:
        return False

    # Convierte el numero a notacion binaria y verifica si tambien es un Palindromo
    # Convierte el numero a binario y elimina el prfijo "0b"
    numero_binario = bin(number)[2:]
    return numero_binario == numero_binario[::-1]


print(is_palindrome(363))
print(is_palindrome(2882))
print(is_palindrome(99))
print(is_palindrome(11))
