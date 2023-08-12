/*
Missing letters

Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.

For example, for the input abce, the output should be d, because d is missing.
 */

// Solution:
function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        // Compare the ASCII values of consecutive characters
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
            // If the idfference is more than 1, then a letter is missing
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return undefined;
}

fearNotLetter("abce");


/*
In this solution, the function uses the charCodeAt() method to get the ASCII value of each character in the string. By comparing the values of consecutive characters, the function can identify when a letter is missing and return it. If no letter is missing, the function returns undefined.
 */