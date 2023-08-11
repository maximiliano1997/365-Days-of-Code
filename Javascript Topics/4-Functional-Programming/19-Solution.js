/*
Split a string into an array using the "split" method.

Use the split method within the splitify function to split str into an array of words. The function should return an array. Note that words are not always separated by spaces, and the array should not contain punctuation marks.
*/

// Solution:

function splitify(str) {
    // Cambia solo el código debajo de esta línea
    return str.split(/\W/);

    // Cambia solo el código encima de esta línea
}

splitify("Hello World,I-am code");

/*
    Explained:
    In this solution, the split method with the regular expression /\W/ breaks the string into an array of words by splitting the string wherever a non-word character (like spaces, hyphens, or punctuation) is found.
*/