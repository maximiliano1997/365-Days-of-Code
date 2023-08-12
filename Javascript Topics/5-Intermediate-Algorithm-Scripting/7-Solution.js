/*
Search and Replace

Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). And the third argument is what you will be replacing the second argument with (after). Preserve the case of the original word when you are replacing it.
*/


// Solution:

function myReplace(str, before, after) {
    if (/[A-Z]/.test(before[0])) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
        // Ensure the "after" word is in lowercase
        after = after.toLowerCase();
    }

    return str.replace(new RegExp(before, "g"), after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/*
    Explained:
    This function first checks if the word to be replaced starts with a capital letter. If it does, it capitalizes the first letter of the replacement word. Then, it uses the replace() method with a regular expression to perform the replacement.
*/