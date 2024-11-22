

class Solution {
    isAnagram(s, t) {

        // comparo si tienen la misma longitud
        if (s.length !== t.length) {
            return false;
        }

        // las dividimos, ordenamos con sort y luego las volvemos a unir para su comparacion
        let sSort = s.split('').sort().join('');
        let tSort = t.split('').sort().join('');

        // las comparamos
        return sSort == tSort;
    }
}

const result = new Solution()

console.log(result.isAnagram('anagram', 'nagaram'))

// FIN