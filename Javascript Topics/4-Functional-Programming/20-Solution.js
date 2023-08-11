/*
Requirement:

Combine an array into a string using the "join" method.

Use the join method (among others) within the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would become "I like Star Wars". For this challenge, do not use the replace method.
 */

// Solution:

function sentensify(str) {
    // Cambia solo el código debajo de esta línea

    return str.split(/\W/).join(' ');

    // Cambia solo el código encima de esta línea
}

sentensify("May-the-force-be-with-you");




/*
Explained:
In this solution, split(/\W/) breaks the string into an array of words, and join(' ') combines the words into a sentence.
 */