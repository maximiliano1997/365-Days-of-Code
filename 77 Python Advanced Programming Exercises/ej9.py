# 9. A prime number is a natural number gretaer than 1 that is not  a product of two smaller natural numbers.
# Examples of prime numbers: 2, 3, 5, 7, 11, 13, 17, 19
# Implement a function called is_prime() that takes a natural numbers as an argument and checkss if it is a prime number. Int hte case of a prime number,, the function returns True, otherwise False.

# Example:
# [IN]: is_prime(11)
# [OUT]: True

# You just need to iomplemente the function. The test run several test cases to validate the solution.


def is_prime(number):
    if number < 2:
        return False
    if number % 2 == 0:
        return number == 2
    i = 3
    # este loop while, comprueba si un numero es primo revisando solo hasta la raix cuadrada de ese numero, lo cual reduce significativamente la cantidad de comprobaciones necesarias.
    while i * i <= number:
        print(i)
        if number % i == 0:
            return False
        i += 2
        print(i)
        return True


print(is_prime(11))
