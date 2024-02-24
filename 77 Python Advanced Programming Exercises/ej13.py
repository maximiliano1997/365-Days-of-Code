'''
13. Consider a simple number compression algorithm that works as
follows:
111155522500 -> [('1', 4), ('5', 3), ('2', 2), ('5', 1), ('O', 2)]
The algorithm goes from left to right through each digit and
returns a list of two-element tuples. Each tuple consists of a
digit and the number of repetitions of a given digit until the
next, different digit in the number is encountered.
Implement a function called compress () that compresses
number as described above.
 Examples:
[IN]: compress(lll)
[OUT]: [('l', 3)]
[IN]: conpress(1000000)
[OUT]: [('1', 1), ('O', 6)]
[IN]: conpress(10005000)
[OUT]: [('1', 1), ('O', 3), ('5', 1), ('O', 3)]
Tip: You can use the itertools built-in module and the groupby class in
your solution.
You just need to implement the function. The tests run several test
cases to validate the solution
'''

from itertools import groupby

# Solution


def compress(number):
    result = []
    for key, group in groupby(str(number)):
        result.append((key, len(list(group))))
    return result


print(compress(111))
print(compress(1125597))
print(compress(9909))
