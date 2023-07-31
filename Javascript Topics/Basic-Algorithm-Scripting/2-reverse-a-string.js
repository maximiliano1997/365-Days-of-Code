/*
Ejercicio 2: Reverse a String

Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh".

 in JavaScript, the reverse() method is not applicable directly to strings but to arrays.

 To fix this, we first need to convert the string to an array using split(), then we can apply reverse(), and finally rejoin the array back into a string using join(). Here's the correct solution:

 */




// Solution:
function reverseString(str) {
    let string = str.split('')
    let reverse = string.reverse();
    return reverse.join("")
}

reverseString('Hello')