/*
    Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array. The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

For example, for the input ([1, 3, 2], [5, 2, 1, 4], [2, 1]), the output should be [1, 3, 2, 5, 4].

 */

// Solution:

function uniteUnique(...arr) {
    // Flatten the array and filter unique values
    return arr
        .flat()
        .filter((value, index, self) => self.indexOf(value) === index);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/*
    Explained:
    In this solution, the function uses the spread syntax to gather all its arguments into an array. The flat() method is used to combine the multiple arrays into a single array. Then, the filter() method is used to remove duplicates by checking if the index of each value in the flattened array is the same as its first occurrence.
 */