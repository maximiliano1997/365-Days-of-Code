/*
Ejercicio 4: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/


// Solution:

function findLongestWordLength(str) {
    let separator = str.split(" ")
    // console.log(separator)
    let longestWord = '';
    for (let i = 0; i < separator.length; i++) {
        if (separator[i].length > longestWord.length) {
            longestWord = separator[i];
        }
    }
    return longestWord + ` <-- is the longest word with ${longestWord.length} letters`;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
