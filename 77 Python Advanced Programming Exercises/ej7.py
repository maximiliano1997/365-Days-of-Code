# 7.Consider the palindromic numbers. A palindromic or symmetric number is a number that does not change when you write its difits in reverse order.
# Some examples of palindromic numbers:
# 363, 2882, 29492
# Implement a function that returns the largest palindromic numbers resulting from the product of two-digit numbers.
# Present the solution in the form of a function called calculate(). In response, call calculate() function and print the result to the console.
# EXPECTED RESULT: 9009

def calculate():
    numbers = []
    for i in range(10, 100):
        for j in range(10, 100):
            if str(i * j) == str(i * j)[::-1]:
                numbers. append(i * j)

    # print(len(numbers))
    # print(numbers)

    return max(numbers)


print(calculate())
