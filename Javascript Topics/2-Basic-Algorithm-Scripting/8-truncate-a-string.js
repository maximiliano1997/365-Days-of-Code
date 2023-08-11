/*
    Ejercicio 8- Truncate a String

    Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/



// Solution:

function truncateString(str, num) {
    let result = ''
    if (str.length > num) {
        result += str.slice(0, num)
        return result + '...';
    } else if (str.length <= num) {
        result += str
        return result;
    }

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))