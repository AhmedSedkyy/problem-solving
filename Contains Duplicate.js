


// https://leetcode.com/problems/contains-duplicate/description/


//Time complexity: O(n log(n) )
var containsDuplicate = function(Numbers) {
    const sorted=Numbers.sort();

    for(let i=0;i<sorted.length;i++){
        if(sorted[i]==sorted[i+1]){
            console.log("True")
            return true
        }
    }
    console.log("False")
    return false
};

containsDuplicate([1,2,3])



//Time complexity: O(n)
var containsDuplicate2 = function(Numbers) {
    const seen = new Set();
    for (let num of Numbers) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

containsDuplicate2([1,2,3,1])
