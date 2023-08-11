/*
    Add elements to the end of an array using "concat" instead of "push".

    Alter the nonMutatingPush function to use concat to add newItem to the end of original without modifying the original or newItem arrays. The function should return an array.
*/

// Solution:

function nonMutatinPush(original, newItem) {
    return original.concat(newItem)
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingPush(first, second));


/*
    Explained:
    The concat() method, as mentioned before, returns a new array that is the result of merging the arrays passed as arguments, and it doesn't modify the original arrays. In this case, it merges original and newItem into a new array.    
*/