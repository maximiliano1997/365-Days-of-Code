
/*
    Convert HTML entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe) in a string to their corresponding HTML entities.

For example, for the input Dolce & Gabbana, the output should be Dolce &amp; Gabbana.
*/


// Solution:

function convertHTML(str) {
    // Create an object for the HTML entities
    const htmlEntities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
    };

    // Use replace() with a regular expression to replace characters with HTML entities
    return str.replace(/([&<>"'])/g, match => htmlEntities[match]);
}

convertHTML("Dolce & Gabbana");



/*
    Explained:
    In this solution, an object called htmlEntities is created to map characters to their corresponding HTML entities. The replace() method is used with a regular expression to search for characters in the string that need to be converted and replace them with their corresponding HTML entities.
*/