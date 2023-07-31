/*
    Ejercicio 13- Falsy Bouncer

Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

*/

// Solution:

function bouncer(arr) {
    return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));




// Explanation:

/*
Even though `false` is a boolean value, it is considered a "falsy" value in JavaScript. A falsy value is a value that becomes `false` when you attempt to convert it to a boolean. In JavaScript, the falsy values are:

- `false`
- `0` and `-0`
- `""` and `''` (empty strings)
- `null`
- `undefined`
- `NaN`

So even though `false` is a boolean, it's considered falsy, which is why it gets removed by the `bouncer` function. 

In the case of the code `return arr.filter(Boolean);`, the `filter` function will pass each value from the array to the `Boolean` function, which will convert it to `true` or `false`.

If the original value is a truthy value (a value that becomes `true`), then the `Boolean` function will return `true` and the value will stay in the array.

If the original value is falsy, the `Boolean` function will return `false` and `filter` will remove that value from the array. So even though `false` is a boolean value, it's not included in the resulting array.

*/