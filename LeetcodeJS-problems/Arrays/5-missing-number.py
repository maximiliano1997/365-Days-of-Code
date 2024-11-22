

# Given an array nums containing n distincs numbers in the range[0, n], return the only number in the range that is missing from the array

nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]


def missingNumber(nums):
    return sum(range(len(nums)+1)) - sum(nums)


print(missingNumber(nums))
