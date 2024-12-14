

# Sorting
class Solution:
    def groupAnagrams(self, strs):
        res = {}
        for s in strs:
            sorted_s = ''.join(sorted(s))
            if sorted_s not in res:
                res[sorted_s] = []
            res[sorted_s].append(s)

        return list(res.values())


# Hash Table

class Solution2:
    def groupAnagrams(self, strs):
        res = defaultdict(list)
        for s in strs:
            count = [0] * 26
            for c in s:
                count[ord(c) - ord('a')] += 1

            key = tuple(count)
            if key not in res:
                res[key] = []
            res[tuple(count)].append(s)

        return list(res.values())


# Prueba con el input

strs = ["act", "pots", "tops", "cat", "stop", "hat"]

solution = Solution()
test = solution.groupAnagrams(strs)
print(test, '<---- test1')

solution2 = Solution()
test2 = solution2.groupAnagrams(strs)
print(test2, '<---- test2')
