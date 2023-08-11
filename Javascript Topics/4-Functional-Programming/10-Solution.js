// Implement the filter Method on a Prototype

Array.prototype.myFilter = function (callback) {
    const newArray = [];

    // Only change code below this line
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) == true) {
            newArray.push(this[i]);
        }
    }
    return newArray;
    // Only change code above this line
}

console.log([23, 65, 98, 5, 13].myFilter(item => item % 2));
console.log(["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi"));
console.log([1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index));