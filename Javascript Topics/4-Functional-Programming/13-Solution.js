/*
    Combine two arrays using the "concat" method.

    Use the "concat" method within the nonMutatingConcat function to cancatenate "attach" to the end of "original". The function should return the cancatenated array.

    */

// Solution:


function onMutatingConcat(original, attach) {
    return original.concat(attach)
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second));