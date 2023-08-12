/*
Pig Latin

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/


// Solution:
function translatePigLatin(str) {
    // If hte string start with a vowel, add "way" to the end.
    if (str.match(/^[aeiou]/)) {
        return str + "way";
    }

    // Find all consonants before the first vowel.
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    // Return the string, starting from the first vowel, concatenated with the consonant cluster and "ay".
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

translatePigLatin("consonant");