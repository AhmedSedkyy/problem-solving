
//https://leetcode.com/problems/two-sum/description/

//Time complexity: O(n)
var twoSum = function(Numbers, target) {
    const seen=new Map();

    for(let i=0;i<Numbers.length;i++) {

        const needed=target-Numbers[i];
        if(seen.has(needed)) {
            console.log([seen.get(needed),i])
            return [seen.get(needed),i]
        } 
        seen.set(Numbers[i],i)
    }

};
twoSum([1,2,4],6)