
/*
    Ejercicio 11- Title Case a Sentence

    Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

// Solution:

function titleCase(str) {
    let lower = str.toLowerCase()
    let sep = lower.split(' ')
    let result = []
    for (var i = 0; i < sep.length; i++) {
        sep[i] = sep[i][0].toUpperCase() + sep[i].slice(1);

    }
    return sep.join(' ');
}


console.log(titleCase("I'm a little tea pot"))