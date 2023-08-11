/*
Requirement:

Use functional programming to convert strings into URL slugs.

Fill in the urlSlug function to convert a string title and return the hyphenated version for the URL. You can use any of the methods discussed in this section and do not use replace. Here are the requirements:

The input is a string with spaces and words in uppercase and lowercase.
The output is a string with the spaces between words replaced by a hyphen (-).
The output should contain all lowercase letters.
The output should not have spaces.
*/

// Solution:
// Cambia solo el código debajo de esta línea
function urlSlug(title) {

    return title
        .toLowerCase()
        .trim() // Remove spaces from the beginning and end
        .split(/\s+/) // Split the string on one or more spaces
        .join('-') // Join using hyphens

}
// Cambia solo el código encima de esta línea
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");





/*
    Explained:

    In this solution:

toLowerCase() converts the string to lowercase.
trim() removes spaces from the beginning and end of the string.
split(/\s+/) breaks the string into an array of words by splitting on one or more spaces.
join('-') combines the words into a string separated by hyphens.
*/