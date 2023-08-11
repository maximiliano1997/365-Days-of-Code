// Refactor Global VAriables Out of Functions


// The global variable

const bookList = ["The Hound of the Baskersvilles", "On The Electrodunamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
    let newArr = [...arr];
    newArr.push(bookName);
    return newArr;
}
// Change code above this line

// Change code below this line
function remove(arr, bookName) {
    let newArr = [...arr];
    if (newArr.indexOf(bookName) >= 0) {
        newArr.splice(newArr.indexOf(bookName), 1);
        return newArr;
    }
}
// Change code above this line


console.log(bookList)