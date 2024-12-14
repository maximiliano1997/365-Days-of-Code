// Input: strs = ["act", "pots", "tops", "cat", "stop", "hat"]

// Output: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]


// Sorting
class Solution {
    groupAnagrams(strs) {
        const res = {};

        for (let s of strs) {
            const sortedS = s.split('').sort().join('')
            if (!res[sortedS]) {
                res[sortedS] = []
            }
            res[sortedS].push(s)
        }
        return Object.values(res);
    }
}

Input: strs = ["act", "pots", "tops", "cat", "stop", "hat"]



const solution = new Solution()
const app = solution.groupAnagrams(strs)


console.log(app)


// Hash Table

class Solution2 {

    groupAnagrams(strs) {
        const res = {}
        for (let s of strs) {
            const count = new Array(26).fill(0)
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const key = count.join(',')
            if (!res[key]) {
                res[key] = []
            }
            res[key].push(s)
        }
        return Object.values(res);
    }
}


const solution2 = new Solution()
const apply2 = solution.groupAnagrams(strs)


console.log(apply2)
