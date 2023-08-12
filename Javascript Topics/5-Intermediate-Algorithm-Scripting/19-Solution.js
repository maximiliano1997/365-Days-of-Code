/*
    Optional Arguments:

    This problem requires creating a function that can either accept two arguments and return their sum or accept one argument and return a new function that expects another argument. When this returned function is invoked with an argument, it should provide the sum of its argument and the argument from the parent function.
 */

// Solution:

function addTogether() {
    const firstArg = arguments[0];

    // Check if the provided argument is a number
    function isNumber(num) {
        return typeof num === 'number';
    }

    // If only one argyments is provided
    if (arguments.length === 1) {
        if (isNumber(firstArg)) {
            return function (secondArg) {
                if (isNumber(secondArg)) {
                    return firstArg + secondArg;
                }
            };
        }
    } else {
        const secondArg = arguments[1];
        if (isNumber(firstArg) && isNumber(secondArg)) {
            return firstArg + secondArg;
        }
    }
}

console.log(addTogether(2, 3));




/*
    Explained:
    The addTogether function first checks if the provided arguments are numbers. If only one argument is provided and it's a number, the function returns another function that expects a single argument. When this returned function is invoked with a valid number, it provides the sum of its argument and the argument from the addTogether function.
 */