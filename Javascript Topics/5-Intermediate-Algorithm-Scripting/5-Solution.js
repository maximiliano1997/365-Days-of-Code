
/*
Spinal case

Convert a string to spinal case. Spinal case means all-lowercase-words-joined-by-hyphens.
*/


// Solution:

function spinalCase(str) {
    // Add a space before all uppercase letters that are not at the start of the word.
    str = str.replace(/(?<=[a-z])([A-Z])/g, ' $1');

    // Replace spaces and undersocres with hyphens, then convert to lowercase.
    return str.replace(/\s+|_+/g, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');



/*
Explained:
In this solution:

The regular expression (?<=[a-z])([A-Z]) looks for uppercase letters that are preceded by lowercase letters and then adds a space before them.
The regular expression \s+|_+ matches one or more spaces or underscores.
replace method is used to replace matches with hyphens.
toLowerCase converts the entire string to lowercase.

*/