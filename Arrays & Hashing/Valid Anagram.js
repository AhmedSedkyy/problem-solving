

//https://leetcode.com/problems/valid-anagram/description/



//Time complexity: O(n log(n) )
var isAnagram = function(s, t) {
    if (s.length !== t.length)  {
        console.log("false")
        return false;
    }

        let sSort = s.split('').sort().join();
        let tSort = t.split('').sort().join();
        return sSort == tSort
    };


//Time complexity: O(n)
var isAnagram = function(s, t) {

    if (s.length !== t.length)  {
        console.log("false")
        return false;
    }
    
    const map = new Map();

    for (let char of s) 
        map.set(char, (map.get(char) || 0) + 1);
    
    for (let char of t) {
        if (!map.has(char) || map.get(char) === 0) 
            return false;

        map.set(char, map.get(char) - 1);
    }

    return true;
};
