/*
    Ejercicio 15 - Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

// Solution:

function mutation(arr) {
    let test = arr[1].toLowerCase()
    let target = arr[0].toLowerCase().split("")
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0)
            return false;
    }
    return true;
}
console.log(mutation(['hello', 'hey']))

// Explained:

/*
In the corrected function, we first convert both strings to lowercase to make the comparison case-insensitive. Then we loop through each character in the second string (test), and if any of these characters is not found in the first string (target), the function immediately returns false. If the function completes its loop without finding any such character, that means all characters in test are in target, so it returns true.
*/