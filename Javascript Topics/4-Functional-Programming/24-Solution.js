/*
Introduction to Currying and Partial Function Application

Complete the body of the function add so that it uses currying to add parameters x, y, and z.
*/



// Solution:

function add(x) {
    // Cambia solo el código debajo de esta línea
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };

    // Cambia solo el código encima de esta línea
};

add(10)(20)(30);



/*
    Explained:
    In this solution:

The outermost function add takes the first argument x and returns another function.
The second function then takes the argument y and returns yet another function.
The innermost function takes the argument z, and then calculates the sum of x, y, and z, and returns it.
*/