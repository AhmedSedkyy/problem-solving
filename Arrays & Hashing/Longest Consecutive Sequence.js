
// https://leetcode.com/problems/longest-consecutive-sequence/description/


//Time complexity: O(n)

var longestConsecutive = function(nums) {

    if (nums.length === 0) return 0;
    let maxLength=0;
    let currentLength=1;

    const numbers= new Set(nums)
    for(let num of numbers) {
        if(!(numbers.has(num-1))) {
            while(numbers.has(num+1)) {
                currentLength++;
                num++;
            }
            if(currentLength >maxLength) maxLength=currentLength;
        }
        currentLength=1;
    }
    console.log(maxLength)
    return maxLength

};

longestConsecutive([1,0,1,2])