/*
Ejercicio 7: Repeat a String Repeat a String

Sure, in JavaScript, we can use the substring or slice method to check if a string ends with a given target string.
*/


function repeatStringNumTimes(str, num) {
    let result = ''
    for (var i = 0; i < num; i++) {
        result += str
    }
    return result;
}

console.log(repeatStringNumTimes("abc", 3));