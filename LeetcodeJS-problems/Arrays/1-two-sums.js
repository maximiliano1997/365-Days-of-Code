var twoSum = function (nums, target) {
    const hash = {}

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        hash[val] = i;
        // console.log(hash, nums)
    }

    console.log(hash, nums)

    for (let i = 0; i < nums.length; i++) {
        let potentialKey = target - nums[i]
        console.log(nums[i])
        console.log(potentialKey)
        // console.log(hash[potentialKey])

        if (hash[potentialKey] && hash[potentialKey] !== i) {
            console.log([i, hash[potentialKey]])
            return [i, hash[potentialKey]];
        }
    }
}

twoSum([2, 7, 11, 15], 9)