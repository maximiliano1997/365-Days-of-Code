

// Given an array nums containing n distincs numbers in the range [0,n], return the only number in the range that is missing from the array

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]

function missingNumber(nums) {
    const counter = Math.min(...nums)
    const sortedNums = nums.sort()

    for (let i = counter; i < nums.length + 1; i++) {
        // console.log(i)
        if (!nums.includes(i)) {
            console.log(i)
            continue
        } else {
            console.log(true, ` includes -> ${i}`)
        }
    }

}

missingNumber(nums)