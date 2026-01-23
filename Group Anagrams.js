

// https://leetcode.com/problems/group-anagrams/description/



//Time complexity: O(m ∗ n log n)
var groupAnagrams = function(strs) {

    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('');

        if (!map.has(key)) 
            map.set(key, []);

        map.get(key).push(str);
    }
    console.log(Array.from(map.values()))
    return Array.from(map.values());
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])



//Time complexity: O(m ∗ n)
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        const count = new Array(26).fill(0);
        for (let char of str) 
            count[char.charCodeAt(0) - 97]+=1;
        
        const key = count.join(',');

        if (!map.has(key)) 
            map.set(key, []);
        
        map.get(key).push(str);
    }
    return Array.from(map.values());
};